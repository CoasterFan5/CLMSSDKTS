

//IMPORTS
import type {User} from "../models/User";
const baseUrl = "/v1/users/{user_id}/observees";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const add_observee_with_credentials = async (
  token: string,
  baseUrl: string,
  params: {"user_id": string;"observee[unique_id]"?: string;"observee[password]"?: string;"access_token"?: string;"pairing_code"?: string;"root_account_id"?: number},
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
  return (await r.json()) as User;
};
