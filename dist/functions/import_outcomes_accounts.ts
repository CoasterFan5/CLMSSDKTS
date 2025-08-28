

//IMPORTS
import type {OutcomeImport} from "../models/OutcomeImport";
const baseUrl = "/v1/accounts/{account_id}/outcome_imports";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const import_outcomes_accounts = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"import_type"?: string;"attachment"?: string;"extension"?: string},
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
  return (await r.json()) as OutcomeImport;
};
