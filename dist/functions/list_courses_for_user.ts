

//IMPORTS
import type {Course} from "../models/Course";
const baseUrl = "/v1/users/{user_id}/courses";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_courses_for_user = async (
  token: string,
  baseUrl: string,
  params: {"user_id": string;"include"?: unknown;"state"?: unknown;"enrollment_state"?: string;"homeroom"?: boolean;"account_id"?: string},
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
  return (await r.json()) as Course[];
};
