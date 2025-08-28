

//IMPORTS
import type {FeatureFlag} from "../models/FeatureFlag";
const baseUrl = "/v1/users/{user_id}/features/flags/{feature}";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_feature_flag_users = async (
  token: string,
  baseUrl: string,
  params: {"user_id": string;"feature": string},
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
  return (await r.json()) as FeatureFlag;
};
