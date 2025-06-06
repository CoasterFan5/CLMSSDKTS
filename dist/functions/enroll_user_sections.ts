 //Generated by CoasterFan5
  const baseUrl = "/v1/sections/{section_id}/enrollments";
  import type {Enrollment} from "../models/Enrollment"

  const method = "POST"

  const urlBuilder = (base: string, items: Record<string, unknown>) => {
    let newUrl = baseUrl
    for (const key in items) {
      newUrl = newUrl.replaceAll(`{${key}}`, `${items[key]}`)
    }

    return base + newUrl
  }

export const enroll_user_sections = async (token: string, baseUrl: string, params: {
  "section_id": string;"enrollment[start_at]"?: undefined;"enrollment[end_at]"?: undefined;"enrollment[user_id]": string;"enrollment[type]": string;"enrollment[role]"?: undefined;"enrollment[role_id]"?: number;"enrollment[enrollment_state]"?: string;"enrollment[course_section_id]"?: number;"enrollment[limit_privileges_to_course_section]"?: boolean;"enrollment[notify]"?: boolean;"enrollment[self_enrollment_code]"?: string;"enrollment[self_enrolled]"?: boolean;"enrollment[associated_user_id]"?: number;"enrollment[sis_user_id]"?: string;"enrollment[integration_id]"?: string;"root_account"?: string
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
  return (await r.json()) as Enrollment
}
