

//IMPORTS
;
const baseUrl = "/v1/quiz_submissions/{quiz_submission_id}/questions/{id}/unflag";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const unflagging_question = async (
  token: string,
  baseUrl: string,
  params: {"quiz_submission_id": string;"id": string;"attempt": number;"validation_token": string;"access_code"?: string},
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
