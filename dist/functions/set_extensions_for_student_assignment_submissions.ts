

//IMPORTS
;
const baseUrl = "/v1/courses/{course_id}/assignments/{assignment_id}/extensions";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const set_extensions_for_student_assignment_submissions = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"assignment_id": string;"assignment_extensions[user_id]": unknown;"assignment_extensions[extra_attempts]": unknown},
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
