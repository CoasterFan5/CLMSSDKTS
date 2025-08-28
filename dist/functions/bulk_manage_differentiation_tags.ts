

//IMPORTS
import type {GroupCategoryandgroupsoperationresults} from "../models/GroupCategoryandgroupsoperationresults";
const baseUrl = "/v1/courses/{course_id}/group_categories/bulk_manage_differentiation_tag";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const bulk_manage_differentiation_tags = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"operations": undefined;"group_category": undefined},
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
  return (await r.json()) as GroupCategoryandgroupsoperationresults;
};
