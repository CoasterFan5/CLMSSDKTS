

//IMPORTS
import type {UsageRights} from "../models/UsageRights";
const baseUrl = "/v1/courses/{course_id}/usage_rights";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const set_usage_rights_courses = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"file_ids": unknown;"folder_ids"?: unknown;"publish"?: boolean;"usage_rights[use_justification]": string;"usage_rights[legal_copyright]"?: string;"usage_rights[license]"?: string},
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
  return (await r.json()) as UsageRights;
};
