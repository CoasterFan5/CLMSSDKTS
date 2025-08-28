

//IMPORTS
import type {AssignmentGroup} from "../models/AssignmentGroup";
const baseUrl = "/v1/courses/{course_id}/assignment_groups";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_assignment_group = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"name"?: string;"position"?: number;"group_weight"?: number;"sis_source_id"?: string;"integration_data"?: undefined},
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
  return (await r.json()) as AssignmentGroup;
};
