

//IMPORTS
import type {PageRevision} from "../models/PageRevision";
const baseUrl = "/v1/groups/{group_id}/pages/{url_or_id}/revisions/{revision_id}";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const show_revision_groups_revision_id = async (
  token: string,
  baseUrl: string,
  params: {"group_id": string;"url_or_id": string;"revision_id": string;"summary"?: boolean},
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
  return (await r.json()) as PageRevision;
};
