

//IMPORTS
import type {MediaTrack} from "../models/MediaTrack";
const baseUrl = "/v1/media_objects/{media_object_id}/media_tracks";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_media_tracks_for_media_object_or_attachment_media_objects = async (
  token: string,
  baseUrl: string,
  params: {"media_object_id": string;"include"?: unknown},
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
  return (await r.json()) as MediaTrack[];
};
