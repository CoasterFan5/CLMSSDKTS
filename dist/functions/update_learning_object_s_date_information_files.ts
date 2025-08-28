

//IMPORTS
;
const baseUrl = "/v1/courses/{course_id}/files/{attachment_id}/date_details";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_learning_object_s_date_information_files = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"attachment_id": string;"due_at"?: undefined;"unlock_at"?: undefined;"lock_at"?: undefined;"only_visible_to_overrides"?: boolean;"assignment_overrides"?: unknown},
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
