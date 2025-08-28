

//IMPORTS
import type {OutcomeGroup} from "../models/OutcomeGroup";
const baseUrl = "/v1/global/outcome_groups/{id}/import";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const import_outcome_group_global = async (
  token: string,
  baseUrl: string,
  params: {"id": string;"source_outcome_group_id": number;"async"?: boolean},
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
  return (await r.json()) as OutcomeGroup;
};
