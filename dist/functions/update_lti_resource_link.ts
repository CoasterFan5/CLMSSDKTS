 //Generated by CoasterFan5
  const baseUrl = "/v1/courses/{course_id}/lti_resource_links/{id}";
  import type {LtiResourceLink} from "../models/LtiResourceLink"

  const method = "PUT"

  const urlBuilder = (base: string, items: Record<string, unknown>) => {
    let newUrl = baseUrl
    for (const key in items) {
      newUrl = newUrl.replaceAll(`{${key}}`, `${items[key]}`)
    }

    return base + newUrl
  }

export const update_lti_resource_link = async (token: string, baseUrl: string, params: {
  "course_id": string;"id": string;"url"?: string;"custom"?: undefined;"include_deleted"?: boolean;"context_external_tool_id"?: number
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
  return (await r.json()) as LtiResourceLink
}
