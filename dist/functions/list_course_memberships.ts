

//IMPORTS
import type {NamesAndRoleMemberships} from "../models/NamesAndRoleMemberships";
const baseUrl = "/lti/courses/{course_id}/names_and_roles";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_course_memberships = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"rlid"?: string;"role"?: string;"limit"?: string},
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
  return (await r.json()) as NamesAndRoleMemberships;
};
