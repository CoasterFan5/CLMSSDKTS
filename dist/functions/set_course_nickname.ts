

//IMPORTS
import type {CourseNickname} from "../models/CourseNickname";
const baseUrl = "/v1/users/self/course_nicknames/{course_id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const set_course_nickname = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"nickname": string},
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
  return (await r.json()) as CourseNickname;
};
