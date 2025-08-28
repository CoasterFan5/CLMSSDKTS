

//IMPORTS
import type {GroupMembershiporaJSONresponsedetailingpartialfailuresifsomemembershipscouldnotbecreated} from "../models/GroupMembershiporaJSONresponsedetailingpartialfailuresifsomemembershipscouldnotbecreated";
const baseUrl = "/v1/groups/{group_id}/memberships";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_membership = async (
  token: string,
  baseUrl: string,
  params: {"group_id": string;"user_id"?: string;"members"?: unknown;"all_in_group_course"?: boolean;"exclude_user_ids"?: unknown},
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
  return (await r.json()) as GroupMembershiporaJSONresponsedetailingpartialfailuresifsomemembershipscouldnotbecreated;
};
