

//IMPORTS
;
const baseUrl = "/v1/courses/{course_id}/assignments/{assignment_id}/anonymous_provisional_grades/status";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const show_provisional_grade_status_for_student = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"assignment_id": string;"anonymous_id"?: string},
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
