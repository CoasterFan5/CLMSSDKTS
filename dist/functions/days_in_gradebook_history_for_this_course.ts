

//IMPORTS
import type {Day} from "../models/Day";
const baseUrl = "/v1/courses/{course_id}/gradebook_history/days";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const days_in_gradebook_history_for_this_course = async (
  token: string,
  baseUrl: string,
  params: {"course_id": number},
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
  return (await r.json()) as Day[];
};
