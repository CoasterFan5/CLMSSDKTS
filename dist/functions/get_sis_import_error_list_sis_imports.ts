

//IMPORTS
import type {SisImportError} from "../models/SisImportError";
const baseUrl = "/v1/accounts/{account_id}/sis_imports/{id}/errors";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_sis_import_error_list_sis_imports = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"id": string;"failure"?: boolean},
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
  return (await r.json()) as SisImportError[];
};
