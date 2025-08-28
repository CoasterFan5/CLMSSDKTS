

//IMPORTS
import type {OutcomeLink} from "../models/OutcomeLink";
const baseUrl = "/v1/courses/{course_id}/outcome_groups/{id}/outcomes";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_linked_outcomes_courses = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"id": string;"outcome_style"?: string},
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
  return (await r.json()) as OutcomeLink[];
};
