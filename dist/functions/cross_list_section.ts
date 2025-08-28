

//IMPORTS
import type {Section} from "../models/Section";
const baseUrl = "/v1/sections/{id}/crosslist/{new_course_id}";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const cross_list_section = async (
  token: string,
  baseUrl: string,
  params: {"id": string;"new_course_id": string;"override_sis_stickiness"?: boolean},
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
  return (await r.json()) as Section;
};
