

//IMPORTS
import type {Grader} from "../models/Grader";
const baseUrl = "/v1/courses/{course_id}/gradebook_history/{date}";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const details_for_given_date_in_gradebook_history_for_this_course = async (
  token: string,
  baseUrl: string,
  params: {"course_id": number;"date": string},
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
  return (await r.json()) as Grader[];
};
