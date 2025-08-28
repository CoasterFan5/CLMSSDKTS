

//IMPORTS
import type {CoursePace} from "../models/CoursePace";
const baseUrl = "/v1/courses/{course_id}/course_pacing/{id}";
const method = "DELETE";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const delete_course_pace = async (
  token: string,
  baseUrl: string,
  params: {"id": string;"course_id": number;"course_pace_id": number},
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
  return (await r.json()) as CoursePace;
};
