

//IMPORTS
import type {User} from "../models/User";
const baseUrl = "/v1/groups/{group_id}/users";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_group_s_users = async (
  token: string,
  baseUrl: string,
  params: {"group_id": string;"search_term"?: string;"include"?: unknown;"exclude_inactive"?: boolean},
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
