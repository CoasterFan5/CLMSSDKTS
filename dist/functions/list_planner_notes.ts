

//IMPORTS
import type {PlannerNote} from "../models/PlannerNote";
const baseUrl = "/v1/planner_notes";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_planner_notes = async (
  token: string,
  baseUrl: string,
  params: {"start_date"?: undefined;"end_date"?: undefined;"context_codes"?: unknown},
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
  return (await r.json()) as PlannerNote[];
};
