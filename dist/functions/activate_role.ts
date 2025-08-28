

//IMPORTS
import type {Role} from "../models/Role";
const baseUrl = "/v1/accounts/{account_id}/roles/{id}/activate";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const activate_role = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"id": string;"role_id": number;"role"?: undefined},
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
