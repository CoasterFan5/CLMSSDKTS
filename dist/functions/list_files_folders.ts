

//IMPORTS
import type {File} from "../models/File";
const baseUrl = "/v1/folders/{id}/files";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_files_folders = async (
  token: string,
  baseUrl: string,
  params: {"id": string;"content_types"?: unknown;"exclude_content_types"?: unknown;"search_term"?: string;"include"?: unknown;"only"?: unknown;"sort"?: string;"order"?: string},
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
  return (await r.json()) as File[];
};
