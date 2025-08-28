

//IMPORTS
import type {DiscussionTopic} from "../models/DiscussionTopic";
const baseUrl = "/v1/announcements";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_announcements = async (
  token: string,
  baseUrl: string,
  params: {"context_codes": unknown;"start_date"?: undefined;"end_date"?: undefined;"available_after"?: undefined;"active_only"?: boolean;"latest_only"?: boolean;"include"?: unknown},
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
  return (await r.json()) as DiscussionTopic[];
};
