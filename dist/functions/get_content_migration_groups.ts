

//IMPORTS
import type {ContentMigration} from "../models/ContentMigration";
const baseUrl = "/v1/groups/{group_id}/content_migrations/{id}";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_content_migration_groups = async (
  token: string,
  baseUrl: string,
  params: {"group_id": string;"id": string},
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
  return (await r.json()) as ContentMigration;
};
