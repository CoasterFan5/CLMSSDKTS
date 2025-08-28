

//IMPORTS
import type {File} from "../models/File";
const baseUrl = "/v1/files/{id}";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_file_files = async (
  token: string,
  baseUrl: string,
  params: {"id": string;"include"?: unknown;"replacement_chain_context_type"?: string;"replacement_chain_context_id"?: number},
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
  return (await r.json()) as File;
};
