 //Generated by CoasterFan5
  const baseUrl = "/v1/groups/{group_id}/usage_rights";
  import type {UsageRights} from "../models/UsageRights"

  const method = "PUT"

  const urlBuilder = (base: string, items: Record<string, unknown>) => {
    let newUrl = baseUrl
    for (const key in items) {
      newUrl = newUrl.replaceAll(`{${key}}`, `${items[key]}`)
    }

    return base + newUrl
  }

export const set_usage_rights_groups = async (token: string, baseUrl: string, params: {
  "group_id": string;"file_ids": unknown;"folder_ids"?: unknown;"publish"?: boolean;"usage_rights[use_justification]": string;"usage_rights[legal_copyright]"?: string;"usage_rights[license]"?: string
}) => {
  const r = await fetch(urlBuilder(baseUrl, params) + "?per_page=100", {
    method: method,
    headers: {
      "Authorization": "Bearer " + token
    }
  })
  if(r.status != 200) {
    throw r
    return undefined
  }
  return (await r.json()) as UsageRights
}
