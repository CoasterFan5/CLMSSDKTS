

//IMPORTS
import type {EnrollmentTerm} from "../models/EnrollmentTerm";
const baseUrl = "/v1/accounts/{account_id}/terms/{id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_enrollment_term = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"id": string;"enrollment_term[name]"?: string;"enrollment_term[start_at]"?: undefined;"enrollment_term[end_at]"?: undefined;"enrollment_term[sis_term_id]"?: string;"enrollment_term[overrides][enrollment_type][start_at]"?: undefined;"enrollment_term[overrides][enrollment_type][end_at]"?: undefined;"override_sis_stickiness"?: boolean},
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
  return (await r.json()) as EnrollmentTerm;
};
