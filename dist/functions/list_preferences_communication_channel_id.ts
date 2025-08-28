

//IMPORTS
import type {NotificationPreference} from "../models/NotificationPreference";
const baseUrl = "/v1/users/{user_id}/communication_channels/{communication_channel_id}/notification_preferences";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_preferences_communication_channel_id = async (
  token: string,
  baseUrl: string,
  params: {"user_id": string;"communication_channel_id": string},
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
  return (await r.json()) as NotificationPreference[];
};
