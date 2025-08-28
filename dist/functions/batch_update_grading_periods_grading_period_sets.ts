

//IMPORTS
;
const baseUrl = "/v1/grading_period_sets/{set_id}/grading_periods/batch_update";
const method = "PATCH";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const batch_update_grading_periods_grading_period_sets = async (
  token: string,
  baseUrl: string,
  params: {"set_id": string;"grading_periods[id]"?: unknown;"grading_periods[title]": unknown;"grading_periods[start_date]": unknown;"grading_periods[end_date]": unknown;"grading_periods[close_date]": unknown;"grading_periods[weight]"?: unknown},
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
