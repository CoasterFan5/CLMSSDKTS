

//IMPORTS
import type {Outcome} from "../models/Outcome";
const baseUrl = "/v1/outcomes/{id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_outcome = async (
  token: string,
  baseUrl: string,
  params: {"id": string;"title"?: string;"display_name"?: string;"description"?: string;"vendor_guid"?: string;"mastery_points"?: number;"ratings[description]"?: unknown;"ratings[points]"?: unknown;"calculation_method"?: string;"calculation_int"?: number;"add_defaults"?: boolean},
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
  return (await r.json()) as Outcome;
};
