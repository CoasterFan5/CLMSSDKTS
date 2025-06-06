 //Generated by CoasterFan5
  const baseUrl = "/v1/courses/{course_id}/quizzes/{quiz_id}/extensions";
  

  const method = "POST"

  const urlBuilder = (base: string, items: Record<string, unknown>) => {
    let newUrl = baseUrl
    for (const key in items) {
      newUrl = newUrl.replaceAll(`{${key}}`, `${items[key]}`)
    }

    return base + newUrl
  }

export const set_extensions_for_student_quiz_submissions = async (token: string, baseUrl: string, params: {
  "course_id": string;"quiz_id": string;"quiz_extensions[user_id]": unknown;"quiz_extensions[extra_attempts]"?: unknown;"quiz_extensions[extra_time]"?: unknown;"quiz_extensions[manually_unlocked]"?: unknown;"quiz_extensions[extend_from_now]"?: unknown;"quiz_extensions[extend_from_end_at]"?: unknown
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
