

//IMPORTS
import type {CalendarEvent} from "../models/CalendarEvent";
const baseUrl = "/v1/users/{user_id}/calendar_events";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_calendar_events_for_user = async (
  token: string,
  baseUrl: string,
  params: {"user_id": string;"type"?: string;"start_date"?: undefined;"end_date"?: undefined;"undated"?: boolean;"all_events"?: boolean;"context_codes"?: unknown;"excludes"?: unknown;"submission_types"?: unknown;"exclude_submission_types"?: unknown;"includes"?: unknown;"important_dates"?: boolean;"blackout_date"?: boolean},
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
  return (await r.json()) as CalendarEvent[];
};
