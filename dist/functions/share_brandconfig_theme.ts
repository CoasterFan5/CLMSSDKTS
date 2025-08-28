

//IMPORTS
import type {SharedBrandConfig} from "../models/SharedBrandConfig";
const baseUrl = "/v1/accounts/{account_id}/shared_brand_configs";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const share_brandconfig_theme = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"shared_brand_config[name]": string;"shared_brand_config[brand_config_md5]": string},
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
  return (await r.json()) as SharedBrandConfig;
};
