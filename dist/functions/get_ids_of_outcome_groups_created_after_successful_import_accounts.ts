

//IMPORTS
import type {arrayofoutcomeids} from "../models/arrayofoutcomeids";
const baseUrl = "/v1/accounts/{account_id}/outcome_imports/{id}/created_group_ids";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_ids_of_outcome_groups_created_after_successful_import_accounts = async (
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
  return (await r.json()) as arrayofoutcomeids;
};
