

//IMPORTS
import type {GroupCategory} from "../models/GroupCategory";
const baseUrl = "/v1/group_categories/{group_category_id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_group_category = async (
  token: string,
  baseUrl: string,
  params: {"group_category_id": string;"name"?: string;"self_signup"?: string;"auto_leader"?: string;"group_limit"?: number;"sis_group_category_id"?: string;"create_group_count"?: number;"split_group_count"?: string},
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
  return (await r.json()) as GroupCategory;
};
