

//IMPORTS
import type {GradingStandard} from "../models/GradingStandard";
const baseUrl = "/v1/accounts/{account_id}/grading_standards";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_new_grading_standard_accounts = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"title": string;"points_based"?: boolean;"scaling_factor"?: number;"grading_scheme_entry[name]": unknown;"grading_scheme_entry[value]": unknown},
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
  return (await r.json()) as GradingStandard;
};
