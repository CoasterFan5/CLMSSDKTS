

//IMPORTS
import type {ContentExport} from "../models/ContentExport";
const baseUrl = "/v1/users/{user_id}/content_exports";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const export_content_users = async (
  token: string,
  baseUrl: string,
  params: {"user_id": string;"export_type": string;"skip_notifications"?: boolean;"select"?: undefined},
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
  return (await r.json()) as ContentExport;
};
