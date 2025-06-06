 //Generated by CoasterFan5
  const baseUrl = "/v1/group_categories/{group_category_id}/import";
  import type {Progress} from "../models/Progress"

  const method = "POST"

  const urlBuilder = (base: string, items: Record<string, unknown>) => {
    let newUrl = baseUrl
    for (const key in items) {
      newUrl = newUrl.replaceAll(`{${key}}`, `${items[key]}`)
    }

    return base + newUrl
  }

export const import_category_groups = async (token: string, baseUrl: string, params: {
  "group_category_id": string;"attachment"?: string
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
  return (await r.json()) as Progress
}
