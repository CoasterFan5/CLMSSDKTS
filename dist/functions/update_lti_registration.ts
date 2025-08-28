

//IMPORTS
import type {LtiRegistration} from "../models/LtiRegistration";
const baseUrl = "/v1/accounts/{account_id}/lti_registrations/{id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_lti_registration = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"id": string;"name"?: string;"admin_nickname"?: string;"description"?: string;"configuration"?: string;"overlay"?: string;"workflow_state"?: string},
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
  return (await r.json()) as LtiRegistration;
};
