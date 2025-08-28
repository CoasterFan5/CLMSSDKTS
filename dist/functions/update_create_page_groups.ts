

//IMPORTS
import type {Page} from "../models/Page";
const baseUrl = "/v1/groups/{group_id}/pages/{url_or_id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_create_page_groups = async (
  token: string,
  baseUrl: string,
  params: {"group_id": string;"url_or_id": string;"wiki_page[title]"?: string;"wiki_page[body]"?: string;"wiki_page[editing_roles]"?: string;"wiki_page[notify_of_update]"?: boolean;"wiki_page[published]"?: boolean;"wiki_page[publish_at]"?: undefined;"wiki_page[front_page]"?: boolean},
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
  return (await r.json()) as Page;
};
