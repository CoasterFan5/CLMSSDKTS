

//IMPORTS
import type {AssignmentOverride} from "../models/AssignmentOverride";
const baseUrl = "/v1/courses/{course_id}/assignments/{assignment_id}/overrides";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_assignment_overrides = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"assignment_id": string},
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
  return (await r.json()) as AssignmentOverride[];
};
