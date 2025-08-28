

//IMPORTS
import type {AccountCalendar} from "../models/AccountCalendar";
const baseUrl = "/v1/account_calendars/{account_id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_calendar = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"visible"?: boolean;"auto_subscribe"?: boolean},
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
  return (await r.json()) as AccountCalendar;
};
