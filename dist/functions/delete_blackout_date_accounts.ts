

//IMPORTS
import type {BlackoutDate} from "../models/BlackoutDate";
const baseUrl = "/v1/accounts/{account_id}/blackout_dates/{id}";
const method = "DELETE";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const delete_blackout_date_accounts = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"id": string},
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
  return (await r.json()) as BlackoutDate;
};
