

//IMPORTS
;
const baseUrl = "/v1/courses/{course_id}/quizzes/{id}/reorder";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const reorder_quiz_items = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"id": string;"order[id]": unknown;"order[type]"?: unknown},
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
