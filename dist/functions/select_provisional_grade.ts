

//IMPORTS
;
const baseUrl = "/v1/courses/{course_id}/assignments/{assignment_id}/provisional_grades/{provisional_grade_id}/select";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const select_provisional_grade = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"assignment_id": string;"provisional_grade_id": string},
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
