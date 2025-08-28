

//IMPORTS
import type {AccountNotification} from "../models/AccountNotification";
const baseUrl = "/v1/accounts/{account_id}/account_notifications/{id}";
const method = "DELETE";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const close_notification_for_user_destroy_notification_for_admin = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"id": string;"remove"?: boolean},
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
  return (await r.json()) as AccountNotification;
};
