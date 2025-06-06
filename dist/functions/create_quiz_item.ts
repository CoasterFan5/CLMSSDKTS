 //Generated by CoasterFan5
  const baseUrl = "/quiz/v1/courses/{course_id}/quizzes/{assignment_id}/items";
  import type {QuizItem} from "../models/QuizItem"

  const method = "POST"

  const urlBuilder = (base: string, items: Record<string, unknown>) => {
    let newUrl = baseUrl
    for (const key in items) {
      newUrl = newUrl.replaceAll(`{${key}}`, `${items[key]}`)
    }

    return base + newUrl
  }

export const create_quiz_item = async (token: string, baseUrl: string, params: {
  "course_id": number;"assignment_id": number;"item[position]"?: number;"item[points_possible]"?: number;"item[entry_type]": string;"item[entry][title]"?: string;"item[entry][item_body]": string;"item[entry][calculator_type]"?: string;"item[entry][feedback][neutral]"?: string;"item[entry][feedback][correct]"?: string;"item[entry][feedback][incorrect]"?: string;"item[entry][interaction_type_slug]": string;"item[entry][interaction_data]": undefined;"item[entry][properties]"?: undefined;"item[entry][scoring_data]": undefined;"item[entry][answer_feedback]"?: undefined;"item[entry][scoring_algorithm]": string
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
  return (await r.json()) as QuizItem
}
