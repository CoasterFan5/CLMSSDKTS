

//IMPORTS
import type {Group} from "../models/Group";
const baseUrl = "/v1/groups";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_group_groups = async (
  token: string,
  baseUrl: string,
  params: {"name"?: string;"description"?: string;"is_public"?: boolean;"join_level"?: string;"storage_quota_mb"?: number;"sis_group_id"?: string},
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
  return (await r.json()) as Group;
};
