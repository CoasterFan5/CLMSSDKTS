

//IMPORTS
import type {Enrollment} from "../models/Enrollment";
const baseUrl = "/v1/courses/{course_id}/enrollments/{id}";
const method = "DELETE";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const conclude_deactivate_or_delete_enrollment = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"id": string;"task"?: string},
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
  return (await r.json()) as Enrollment;
};
