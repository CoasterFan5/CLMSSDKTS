

//IMPORTS
import type {User} from "../models/User";
const baseUrl = "/v1/users/{id}/merge_into/accounts/{destination_account_id}/users/{destination_user_id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const merge_user_into_another_user_accounts = async (
  token: string,
  baseUrl: string,
  params: {"id": string;"destination_account_id": string;"destination_user_id": string},
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
