

//IMPORTS
import type {Admin} from "../models/Admin";
const baseUrl = "/v1/accounts/{account_id}/admins";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const make_account_admin = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"user_id": number;"role"?: string;"role_id"?: number;"send_confirmation"?: boolean},
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
  return (await r.json()) as Admin;
};
