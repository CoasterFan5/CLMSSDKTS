

//IMPORTS
import type {Progress} from "../models/Progress";
const baseUrl = "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/update_grades";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const grade_or_comment_on_multiple_submissions_sections_assignments = async (
  token: string,
  baseUrl: string,
  params: {"section_id": string;"assignment_id": string;"grade_data[<student_id>][posted_grade]"?: string;"grade_data[<student_id>][excuse]"?: boolean;"grade_data[<student_id>][rubric_assessment]"?: undefined;"grade_data[<student_id>][text_comment]"?: string;"grade_data[<student_id>][group_comment]"?: boolean;"grade_data[<student_id>][media_comment_id]"?: string;"grade_data[<student_id>][media_comment_type]"?: string;"grade_data[<student_id>][file_ids]"?: unknown;"grade_data[<assignment_id>][<student_id>]"?: number},
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
  return (await r.json()) as Progress;
};
