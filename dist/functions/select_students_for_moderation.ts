

//IMPORTS
import type {User} from "../models/User";
const baseUrl = "/v1/courses/{course_id}/assignments/{assignment_id}/moderated_students";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const select_students_for_moderation = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"assignment_id": string;"student_ids"?: unknown},
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
  return (await r.json()) as User[];
};
