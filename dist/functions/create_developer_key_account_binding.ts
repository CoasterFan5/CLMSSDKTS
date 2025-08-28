

//IMPORTS
import type {DeveloperKeyAccountBinding} from "../models/DeveloperKeyAccountBinding";
const baseUrl = "/v1/accounts/{account_id}/developer_keys/{developer_key_id}/developer_key_account_bindings";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_developer_key_account_binding = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"developer_key_id": string;"workflow_state"?: string},
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
  return (await r.json()) as DeveloperKeyAccountBinding;
};
