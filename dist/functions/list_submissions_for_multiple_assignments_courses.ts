

//IMPORTS
;
const baseUrl = "/v1/courses/{course_id}/students/submissions";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_submissions_for_multiple_assignments_courses = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"student_ids"?: unknown;"assignment_ids"?: unknown;"grouped"?: boolean;"post_to_sis"?: boolean;"submitted_since"?: undefined;"graded_since"?: undefined;"grading_period_id"?: number;"workflow_state"?: string;"enrollment_state"?: string;"state_based_on_date"?: boolean;"order"?: string;"order_direction"?: string;"include"?: unknown},
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
