

//IMPORTS
import type {MediaObject} from "../models/MediaObject";
const baseUrl = "/v1/groups/{group_id}/media_objects";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_media_objects_groups_media_objects = async (
  token: string,
  baseUrl: string,
  params: {"group_id": string;"sort"?: string;"order"?: string;"exclude"?: unknown},
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
  return (await r.json()) as MediaObject[];
};
