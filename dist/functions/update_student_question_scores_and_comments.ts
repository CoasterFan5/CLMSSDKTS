

//IMPORTS
;
const baseUrl = "/v1/courses/{course_id}/quizzes/{quiz_id}/submissions/{id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_student_question_scores_and_comments = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"quiz_id": string;"id": string;"quiz_submissions[attempt]": unknown;"quiz_submissions[fudge_points]"?: unknown;"quiz_submissions[questions]"?: unknown},
) => {
  const r = await fetch(urlBuilder(baseUrl, params) + "?per_page=100", {
    method: method,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (r.status != 200) {
    throw r;
  }
  return (await r.json()) as void;
};
