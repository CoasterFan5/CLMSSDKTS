

//IMPORTS
import type {Module} from "../models/Module";
const baseUrl = "/v1/courses/{course_id}/modules";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_module = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"module[name]": string;"module[unlock_at]"?: undefined;"module[position]"?: number;"module[require_sequential_progress]"?: boolean;"module[prerequisite_module_ids]"?: unknown;"module[publish_final_grade]"?: boolean},
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
  return (await r.json()) as Module;
};
