

//IMPORTS
import type {OutcomeAlignment} from "../models/OutcomeAlignment";
const baseUrl = "/v1/courses/{course_id}/outcome_alignments";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_aligned_assignments_for_outcome_in_course_for_particular_student = async (
  token: string,
  baseUrl: string,
  params: {"course_id": number;"student_id"?: number},
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
  return (await r.json()) as OutcomeAlignment[];
};
