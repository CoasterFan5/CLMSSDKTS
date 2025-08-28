

//IMPORTS
import type {Report} from "../models/Report";
const baseUrl = "/v1/courses/{course_id}/reports/{report_type}";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const start_report = async (
  token: string,
  baseUrl: string,
  params: {"course_id": number;"report_type": string;"parameters"?: string;"parameters[section_ids]"?: unknown},
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
  return (await r.json()) as Report;
};
