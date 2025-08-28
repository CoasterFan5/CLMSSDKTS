

//IMPORTS
import type {Group} from "../models/Group";
const baseUrl = "/v1/courses/{course_id}/groups";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_groups_available_in_context_courses = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"only_own_groups"?: boolean;"include"?: unknown;"collaboration_state"?: string},
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
  return (await r.json()) as Group[];
};
