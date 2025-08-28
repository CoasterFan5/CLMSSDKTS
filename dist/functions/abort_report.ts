

//IMPORTS
import type {Report} from "../models/Report";
const baseUrl = "/v1/accounts/{account_id}/reports/{report}/{id}/abort";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const abort_report = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"report": string;"id": string},
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
  return (await r.json()) as Report;
};
