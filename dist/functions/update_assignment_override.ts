

//IMPORTS
import type {AssignmentOverride} from "../models/AssignmentOverride";
const baseUrl = "/v1/courses/{course_id}/assignments/{assignment_id}/overrides/{id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_assignment_override = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"assignment_id": string;"id": string;"assignment_override[student_ids]"?: unknown;"assignment_override[title]"?: string;"assignment_override[due_at]"?: undefined;"assignment_override[unlock_at]"?: undefined;"assignment_override[lock_at]"?: undefined},
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
  return (await r.json()) as AssignmentOverride;
};
