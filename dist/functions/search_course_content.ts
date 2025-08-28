

//IMPORTS
import type {SearchResult} from "../models/SearchResult";
const baseUrl = "/v1/courses/{course_id}/smartsearch";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const search_course_content = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"q": string;"filter"?: unknown},
) => {
  const r = await fetch(urlBuilder(baseUrl, params) + "?per_page=100", {
    method: method,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (r.status != 200) {
    throw r;
  }
  return (await r.json()) as SearchResult[];
};
