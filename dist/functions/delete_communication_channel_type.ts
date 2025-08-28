

//IMPORTS
import type {CommunicationChannel} from "../models/CommunicationChannel";
const baseUrl = "/v1/users/{user_id}/communication_channels/{type}/{address}";
const method = "DELETE";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const delete_communication_channel_type = async (
  token: string,
  baseUrl: string,
  params: {"user_id": string;"type": string;"address": string},
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
  return (await r.json()) as CommunicationChannel;
};
