 //Generated by CoasterFan5
  const baseUrl = "/v1/accounts/{account_id}/account_notifications";
  

  const method = "POST"

  const urlBuilder = (base: string, items: Record<string, unknown>) => {
    let newUrl = baseUrl
    for (const key in items) {
      newUrl = newUrl.replaceAll(`{${key}}`, `${items[key]}`)
    }

    return base + newUrl
  }

export const create_global_notification = async (token: string, baseUrl: string, params: {
  "account_id": string;"account_notification[subject]": string;"account_notification[message]": string;"account_notification[start_at]": undefined;"account_notification[end_at]": undefined;"account_notification[icon]"?: string;"account_notification_roles"?: unknown
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
