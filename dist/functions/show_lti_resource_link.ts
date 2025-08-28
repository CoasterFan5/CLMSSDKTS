

//IMPORTS
import type {LtiResourceLink} from "../models/LtiResourceLink";
const baseUrl = "/v1/courses/{course_id}/lti_resource_links/{id}";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const show_lti_resource_link = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"id": string;"include_deleted"?: boolean},
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
  return (await r.json()) as LtiResourceLink;
};
