

//IMPORTS
import type {Proficiency} from "../models/Proficiency";
const baseUrl = "/v1/accounts/{account_id}/outcome_proficiency";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_update_proficiency_ratings_accounts = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"ratings[description]"?: unknown;"ratings[points]"?: unknown;"ratings[mastery]"?: unknown;"ratings[color]"?: unknown},
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
  return (await r.json()) as Proficiency;
};
