 //Generated by CoasterFan5
  const baseUrl = "/sis/accounts/{account_id}/assignments";
  

  const method = "GET"

  const urlBuilder = (base: string, items: Record<string, unknown>) => {
    let newUrl = baseUrl
    for (const key in items) {
      newUrl = newUrl.replaceAll(`{${key}}`, `${items[key]}`)
    }

    return base + newUrl
  }

export const retrieve_assignments_enabled_for_grade_export_to_sis_accounts = async (token: string, baseUrl: string, params: {
  "account_id": number;"course_id"?: number;"starts_before"?: undefined;"ends_after"?: undefined;"include"?: string
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
  return (await r.json()) as void
}
