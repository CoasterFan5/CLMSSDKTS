

//IMPORTS
import type {Folder} from "../models/Folder";
const baseUrl = "/v1/folders/{dest_folder_id}/copy_folder";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const copy_folder = async (
  token: string,
  baseUrl: string,
  params: {"dest_folder_id": string;"source_folder_id": string},
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
  return (await r.json()) as Folder;
};
