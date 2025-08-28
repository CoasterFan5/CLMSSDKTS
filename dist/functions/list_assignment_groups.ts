

//IMPORTS
import type {AssignmentGroup} from "../models/AssignmentGroup";
const baseUrl = "/v1/courses/{course_id}/assignment_groups";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_assignment_groups = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"include"?: unknown;"assignment_ids"?: unknown;"exclude_assignment_submission_types"?: unknown;"override_assignment_dates"?: boolean;"grading_period_id"?: number;"scope_assignments_to_student"?: boolean},
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
  return (await r.json()) as AssignmentGroup[];
};
