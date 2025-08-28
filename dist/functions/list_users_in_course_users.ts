

//IMPORTS
import type {User} from "../models/User";
const baseUrl = "/v1/courses/{course_id}/users";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_users_in_course_users = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"search_term"?: string;"sort"?: string;"enrollment_type"?: unknown;"enrollment_role"?: string;"enrollment_role_id"?: number;"include"?: unknown;"user_id"?: string;"user_ids"?: unknown;"enrollment_state"?: unknown},
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
