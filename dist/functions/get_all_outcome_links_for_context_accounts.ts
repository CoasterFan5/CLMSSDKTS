

//IMPORTS
import type {OutcomeLink} from "../models/OutcomeLink";
const baseUrl = "/v1/accounts/{account_id}/outcome_group_links";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_all_outcome_links_for_context_accounts = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"outcome_style"?: string;"outcome_group_style"?: string},
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
  return (await r.json()) as OutcomeLink[];
};
