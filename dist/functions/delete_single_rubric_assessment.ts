 //Generated by CoasterFan5
  const baseUrl = "/v1/courses/{course_id}/rubric_associations/{rubric_association_id}/rubric_assessments/{id}";
  import type {RubricAssessment} from "../models/RubricAssessment"

  const method = "DELETE"

  const urlBuilder = (base: string, items: Record<string, unknown>) => {
    let newUrl = baseUrl
    for (const key in items) {
      newUrl = newUrl.replaceAll(`{${key}}`, `${items[key]}`)
    }

    return base + newUrl
  }

export const delete_single_rubric_assessment = async (token: string, baseUrl: string, params: {
  "course_id": string;"rubric_association_id": string;"id": string
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
  return (await r.json()) as RubricAssessment
}
