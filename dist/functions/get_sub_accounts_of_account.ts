

//IMPORTS
import type {Account} from "../models/Account";
const baseUrl = "/v1/accounts/{account_id}/sub_accounts";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_sub_accounts_of_account = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"recursive"?: boolean;"order"?: string;"include"?: unknown},
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
  return (await r.json()) as Account[];
};
