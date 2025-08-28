

//IMPORTS
import type {gradesGrades} from "../models/gradesGrades";
const baseUrl = "/v1/courses/{course_id}/what_if_grades/reset";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const reset_what_if_scores_for_current_user_for_entire_course_and_recalculate_grades = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string},
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
  return (await r.json()) as gradesGrades[];
};
