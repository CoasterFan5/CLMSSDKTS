

//IMPORTS
import type {EnrollmentTermsList} from "../models/EnrollmentTermsList";
const baseUrl = "/v1/accounts/{account_id}/terms";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_enrollment_terms = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"workflow_state"?: unknown;"include"?: unknown;"term_name"?: string},
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
  return (await r.json()) as EnrollmentTermsList;
};
