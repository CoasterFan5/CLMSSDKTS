

//IMPORTS
import type {Role} from "../models/Role";
const baseUrl = "/v1/accounts/{account_id}/roles";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_new_role = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"label": string;"role"?: string;"base_role_type"?: string;"permissions[<X>][explicit]"?: boolean;"permissions[<X>][enabled]"?: boolean;"permissions[<X>][locked]"?: boolean;"permissions[<X>][applies_to_self]"?: boolean;"permissions[<X>][applies_to_descendants]"?: boolean},
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
  return (await r.json()) as Role;
};
