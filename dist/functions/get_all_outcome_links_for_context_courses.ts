 //Generated by CoasterFan5
  const baseUrl = "/v1/courses/{course_id}/outcome_group_links";
  import type {OutcomeLink} from "../models/OutcomeLink"

  const method = "GET"

  const urlBuilder = (base: string, items: Record<string, unknown>) => {
    let newUrl = baseUrl
    for (const key in items) {
      newUrl = newUrl.replaceAll(`{${key}}`, `${items[key]}`)
    }

    return base + newUrl
  }

export const get_all_outcome_links_for_context_courses = async (token: string, baseUrl: string, params: {
  "course_id": string;"outcome_style"?: string;"outcome_group_style"?: string
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
  return (await r.json()) as OutcomeLink[]
}
