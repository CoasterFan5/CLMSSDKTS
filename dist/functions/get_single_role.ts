

//IMPORTS
import type {Role} from "../models/Role";
const baseUrl = "/v1/accounts/{account_id}/roles/{id}";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_single_role = async (
  token: string,
  baseUrl: string,
  params: {"id": string;"account_id": string;"role_id": number;"role"?: string},
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
  return (await r.json()) as Role;
};
