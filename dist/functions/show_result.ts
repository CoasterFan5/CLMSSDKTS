

//IMPORTS
import type {Result} from "../models/Result";
const baseUrl = "/lti/courses/{course_id}/line_items/{line_item_id}/results/{id}";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const show_result = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"line_item_id": string;"id": string},
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
  return (await r.json()) as Result;
};
