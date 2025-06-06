 //Generated by CoasterFan5
  const baseUrl = "/v1/users/{user_id}/eportfolios";
  import type {ePortfolio} from "../models/ePortfolio"

  const method = "GET"

  const urlBuilder = (base: string, items: Record<string, unknown>) => {
    let newUrl = baseUrl
    for (const key in items) {
      newUrl = newUrl.replaceAll(`{${key}}`, `${items[key]}`)
    }

    return base + newUrl
  }

export const get_all_eportfolios_for_user = async (token: string, baseUrl: string, params: {
  "user_id": string;"include"?: unknown
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
  return (await r.json()) as ePortfolio[]
}
