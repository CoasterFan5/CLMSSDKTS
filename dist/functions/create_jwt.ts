

//IMPORTS
import type {JWT} from "../models/JWT";
const baseUrl = "/v1/jwts";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_jwt = async (
  token: string,
  baseUrl: string,
  params: {"workflows"?: unknown;"context_type"?: string;"context_id"?: number;"context_uuid"?: string;"canvas_audience"?: boolean},
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
  return (await r.json()) as JWT;
};
