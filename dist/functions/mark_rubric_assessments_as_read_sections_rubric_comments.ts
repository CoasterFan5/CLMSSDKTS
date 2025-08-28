

//IMPORTS
;
const baseUrl = "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/rubric_comments/read";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const mark_rubric_assessments_as_read_sections_rubric_comments = async (
  token: string,
  baseUrl: string,
  params: {"section_id": string;"assignment_id": string;"user_id": string},
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
