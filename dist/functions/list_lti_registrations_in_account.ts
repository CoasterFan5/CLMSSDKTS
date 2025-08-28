

//IMPORTS
import type {ListLtiRegistrationsResponse} from "../models/ListLtiRegistrationsResponse";
const baseUrl = "/v1/accounts/{account_id}/lti_registrations";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_lti_registrations_in_account = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"per_page"?: number;"page"?: number;"sort"?: string;"dir"?: string;"include"?: unknown},
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
  return (await r.json()) as ListLtiRegistrationsResponse;
};
