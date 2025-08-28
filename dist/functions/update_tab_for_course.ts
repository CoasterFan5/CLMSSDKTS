

//IMPORTS
import type {Tab} from "../models/Tab";
const baseUrl = "/v1/courses/{course_id}/tabs/{tab_id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_tab_for_course = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"tab_id": string;"position"?: number;"hidden"?: boolean},
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
  return (await r.json()) as Tab;
};
