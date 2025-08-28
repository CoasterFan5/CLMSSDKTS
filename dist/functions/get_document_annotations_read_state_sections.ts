

//IMPORTS
;
const baseUrl = "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{user_id}/document_annotations/read";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_document_annotations_read_state_sections = async (
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
