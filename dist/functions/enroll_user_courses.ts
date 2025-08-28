

//IMPORTS
import type {Enrollment} from "../models/Enrollment";
const baseUrl = "/v1/courses/{course_id}/enrollments";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const enroll_user_courses = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"enrollment[start_at]"?: undefined;"enrollment[end_at]"?: undefined;"enrollment[user_id]": string;"enrollment[type]": string;"enrollment[role]"?: undefined;"enrollment[role_id]"?: number;"enrollment[enrollment_state]"?: string;"enrollment[course_section_id]"?: number;"enrollment[limit_privileges_to_course_section]"?: boolean;"enrollment[notify]"?: boolean;"enrollment[self_enrollment_code]"?: string;"enrollment[self_enrolled]"?: boolean;"enrollment[associated_user_id]"?: number;"enrollment[sis_user_id]"?: string;"enrollment[integration_id]"?: string;"root_account"?: string},
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
  return (await r.json()) as Enrollment;
};
