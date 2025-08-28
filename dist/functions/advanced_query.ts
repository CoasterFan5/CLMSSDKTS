

//IMPORTS
import type {GradeChangeEvent} from "../models/GradeChangeEvent";
const baseUrl = "/v1/audit/grade_change";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const advanced_query = async (
  token: string,
  baseUrl: string,
  params: {"course_id"?: number;"assignment_id"?: number;"student_id"?: number;"grader_id"?: number;"start_time"?: undefined;"end_time"?: undefined},
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
  return (await r.json()) as GradeChangeEvent[];
};
