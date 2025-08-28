

//IMPORTS
import type {Enrollment} from "../models/Enrollment";
const baseUrl = "/v1/courses/{course_id}/users/{user_id}/last_attended";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const add_last_attended_date = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"user_id": string;"date"?: undefined},
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
