

//IMPORTS
;
const baseUrl = "/v1/courses/{course_id}/quizzes/{id}/submission_users/message";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const send_message_to_unsubmitted_or_submitted_users_for_quiz = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"id": string;"conversations"?: undefined},
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
