

//IMPORTS
import type {PageView} from "../models/PageView";
const baseUrl = "/v1/users/{user_id}/page_views";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_user_page_views = async (
  token: string,
  baseUrl: string,
  params: {"user_id": string;"start_time"?: undefined;"end_time"?: undefined},
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
  return (await r.json()) as PageView[];
};
