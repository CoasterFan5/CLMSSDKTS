

//IMPORTS
import type {ContentShare} from "../models/ContentShare";
const baseUrl = "/v1/users/{user_id}/content_shares";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_content_share = async (
  token: string,
  baseUrl: string,
  params: {"user_id": string;"receiver_ids": undefined;"content_type": string;"content_id": number},
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
  return (await r.json()) as ContentShare;
};
