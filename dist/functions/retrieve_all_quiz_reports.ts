

//IMPORTS
import type {QuizReport} from "../models/QuizReport";
const baseUrl = "/v1/courses/{course_id}/quizzes/{quiz_id}/reports";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const retrieve_all_quiz_reports = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"quiz_id": string;"includes_all_versions"?: boolean},
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
  return (await r.json()) as QuizReport[];
};
