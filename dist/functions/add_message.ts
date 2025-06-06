 //Generated by CoasterFan5
  const baseUrl = "/v1/conversations/{id}/add_message";
  

  const method = "POST"

  const urlBuilder = (base: string, items: Record<string, unknown>) => {
    let newUrl = baseUrl
    for (const key in items) {
      newUrl = newUrl.replaceAll(`{${key}}`, `${items[key]}`)
    }

    return base + newUrl
  }

export const add_message = async (token: string, baseUrl: string, params: {
  "id": string;"body": string;"attachment_ids"?: unknown;"media_comment_id"?: string;"media_comment_type"?: string;"recipients"?: unknown;"included_messages"?: unknown
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
