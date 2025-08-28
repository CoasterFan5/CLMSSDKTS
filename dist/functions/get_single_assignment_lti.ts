

//IMPORTS
import type {LtiAssignment} from "../models/LtiAssignment";
const baseUrl = "/lti/assignments/{assignment_id}";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_single_assignment_lti = async (
  token: string,
  baseUrl: string,
  params: {"assignment_id": string;"user_id"?: string},
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
  return (await r.json()) as LtiAssignment;
};
