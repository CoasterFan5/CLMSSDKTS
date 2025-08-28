

//IMPORTS
import type {BlackoutDateTheresultwhichshouldmatchtheinputwithmaybesomedifferentIDs} from "../models/BlackoutDateTheresultwhichshouldmatchtheinputwithmaybesomedifferentIDs";
const baseUrl = "/v1/courses/{course_id}/blackout_dates";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_list_of_blackout_dates = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"blackout_dates:"?: string},
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
  return (await r.json()) as BlackoutDateTheresultwhichshouldmatchtheinputwithmaybesomedifferentIDs[];
};
