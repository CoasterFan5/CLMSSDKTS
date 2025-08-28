

//IMPORTS
;
const baseUrl = "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const grade_or_comment_on_submission_courses = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"assignment_id": string;"user_id": string;"comment[text_comment]"?: string;"comment[attempt]"?: number;"comment[group_comment]"?: boolean;"comment[media_comment_id]"?: string;"comment[media_comment_type]"?: string;"comment[file_ids]"?: unknown;"include[visibility]"?: string;"prefer_points_over_scheme"?: boolean;"submission[posted_grade]"?: string;"submission[excuse]"?: boolean;"submission[late_policy_status]"?: string;"submission[sticker]"?: string;"submission[seconds_late_override]"?: number;"rubric_assessment"?: undefined},
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
