

//IMPORTS
import type {Quiz} from "../models/Quiz";
const baseUrl = "/v1/courses/{course_id}/quizzes";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_quizzes_in_course = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"search_term"?: string},
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
  return (await r.json()) as Quiz[];
};
