

//IMPORTS
import type {Assignment} from "../models/Assignment";
const baseUrl = "/v1/courses/{course_id}/assignments/{id}";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_single_assignment = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"id": string;"include"?: unknown;"override_assignment_dates"?: boolean;"needs_grading_count_by_section"?: boolean;"all_dates"?: boolean},
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
  return (await r.json()) as Assignment;
};
