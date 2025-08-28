

//IMPORTS
;
const baseUrl = "/v1/polls/{poll_id}/poll_sessions";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_single_poll_session = async (
  token: string,
  baseUrl: string,
  params: {"poll_id": string;"poll_sessions[course_id]": unknown;"poll_sessions[course_section_id]"?: unknown;"poll_sessions[has_public_results]"?: unknown},
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
