

//IMPORTS
import type {SisImport} from "../models/SisImport";
const baseUrl = "/v1/accounts/{account_id}/sis_imports";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_sis_import_list = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"created_since"?: undefined;"created_before"?: undefined;"workflow_state"?: unknown},
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
  return (await r.json()) as SisImport[];
};
