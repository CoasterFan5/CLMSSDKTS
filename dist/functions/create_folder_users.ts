

//IMPORTS
import type {Folder} from "../models/Folder";
const baseUrl = "/v1/users/{user_id}/folders";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_folder_users = async (
  token: string,
  baseUrl: string,
  params: {"user_id": string;"name": string;"parent_folder_id"?: string;"parent_folder_path"?: string;"lock_at"?: undefined;"unlock_at"?: undefined;"locked"?: boolean;"hidden"?: boolean;"position"?: number},
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
