

//IMPORTS
import type {Assignment} from "../models/Assignment";
const baseUrl = "/v1/users/{user_id}/missing_submissions";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_missing_submissions = async (
  token: string,
  baseUrl: string,
  params: {"user_id": string;"observed_user_id"?: string;"include"?: unknown;"filter"?: unknown;"course_ids"?: unknown},
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
  return (await r.json()) as Assignment[];
};
