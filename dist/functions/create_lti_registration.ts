

//IMPORTS
import type {LtiRegistration} from "../models/LtiRegistration";
const baseUrl = "/v1/accounts/{account_id}/lti_registrations";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_lti_registration = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"name"?: string;"admin_nickname"?: string;"vendor"?: string;"description"?: string;"configuration"?: string;"overlay"?: string;"unified_tool_id"?: string;"workflow_state"?: string},
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
