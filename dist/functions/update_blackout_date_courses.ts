

//IMPORTS
import type {BlackoutDate} from "../models/BlackoutDate";
const baseUrl = "/v1/courses/{course_id}/blackout_dates/{id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_blackout_date_courses = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"id": string;"start_date"?: undefined;"end_date"?: undefined;"event_title"?: string},
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
  return (await r.json()) as BlackoutDate;
};
