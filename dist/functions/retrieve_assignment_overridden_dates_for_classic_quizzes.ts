

//IMPORTS
import type {QuizAssignmentOverrideSetContainer} from "../models/QuizAssignmentOverrideSetContainer";
const baseUrl = "/v1/courses/{course_id}/quizzes/assignment_overrides";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const retrieve_assignment_overridden_dates_for_classic_quizzes = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"quiz_assignment_overrides[quiz_ids]"?: unknown},
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
  return (await r.json()) as QuizAssignmentOverrideSetContainer;
};
