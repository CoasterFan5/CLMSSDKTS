

//IMPORTS
import type {PlannerOverride} from "../models/PlannerOverride";
const baseUrl = "/v1/planner/overrides/{id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_planner_override = async (
  token: string,
  baseUrl: string,
  params: {"id": string;"marked_complete"?: string;"dismissed"?: string},
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
  return (await r.json()) as PlannerOverride;
};
