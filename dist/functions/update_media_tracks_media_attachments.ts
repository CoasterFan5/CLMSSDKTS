

//IMPORTS
import type {MediaTrack} from "../models/MediaTrack";
const baseUrl = "/v1/media_attachments/{attachment_id}/media_tracks";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_media_tracks_media_attachments = async (
  token: string,
  baseUrl: string,
  params: {"attachment_id": string;"include"?: unknown},
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
