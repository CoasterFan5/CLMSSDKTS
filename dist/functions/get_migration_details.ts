

//IMPORTS
import type {ChangeRecord} from "../models/ChangeRecord";
const baseUrl = "/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations/{id}/details";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_migration_details = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"template_id": string;"id": string},
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
  return (await r.json()) as ChangeRecord[];
};
