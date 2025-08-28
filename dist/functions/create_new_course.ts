

//IMPORTS
import type {Course} from "../models/Course";
const baseUrl = "/v1/accounts/{account_id}/courses";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_new_course = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"course[name]"?: string;"course[course_code]"?: string;"course[start_at]"?: undefined;"course[end_at]"?: undefined;"course[license]"?: string;"course[is_public]"?: boolean;"course[is_public_to_auth_users]"?: boolean;"course[public_syllabus]"?: boolean;"course[public_syllabus_to_auth]"?: boolean;"course[public_description]"?: string;"course[allow_student_wiki_edits]"?: boolean;"course[allow_wiki_comments]"?: boolean;"course[allow_student_forum_attachments]"?: boolean;"course[open_enrollment]"?: boolean;"course[self_enrollment]"?: boolean;"course[restrict_enrollments_to_course_dates]"?: boolean;"course[term_id]"?: string;"course[sis_course_id]"?: string;"course[integration_id]"?: string;"course[hide_final_grades]"?: boolean;"course[apply_assignment_group_weights]"?: boolean;"course[time_zone]"?: string;"offer"?: boolean;"enroll_me"?: boolean;"course[default_view]"?: string;"course[syllabus_body]"?: string;"course[grading_standard_id]"?: number;"course[grade_passback_setting]"?: string;"course[course_format]"?: string;"course[post_manually]"?: boolean;"enable_sis_reactivation"?: boolean},
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
  return (await r.json()) as Course;
};
