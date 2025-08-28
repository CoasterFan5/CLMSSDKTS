

//IMPORTS
import type {Assignment} from "../models/Assignment";
const baseUrl = "/v1/courses/{course_id}/assignment_groups/{assignment_group_id}/assignments";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_assignments_assignment_groups = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"assignment_group_id": string;"include"?: unknown;"search_term"?: string;"override_assignment_dates"?: boolean;"needs_grading_count_by_section"?: boolean;"bucket"?: string;"assignment_ids"?: unknown;"order_by"?: string;"post_to_sis"?: boolean;"new_quizzes"?: boolean},
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
  return (await r.json()) as Assignment[];
};
