

//IMPORTS
import type {User} from "../models/User";
const baseUrl = "/v1/accounts/{account_id}/users/{user_id}/restore";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const restore_deleted_user_from_root_account = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"user_id": string},
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
  return (await r.json()) as User;
};
