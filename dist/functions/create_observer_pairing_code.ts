

//IMPORTS
import type {PairingCode} from "../models/PairingCode";
const baseUrl = "/v1/users/{user_id}/observer_pairing_codes";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_observer_pairing_code = async (
  token: string,
  baseUrl: string,
  params: {"user_id": string},
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
  return (await r.json()) as PairingCode;
};
