

//IMPORTS
import type {SubmissionHistory} from "../models/SubmissionHistory";
const baseUrl = "/v1/courses/{course_id}/gradebook_history/{date}/graders/{grader_id}/assignments/{assignment_id}/submissions";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const lists_submissions = async (
  token: string,
  baseUrl: string,
  params: {"course_id": number;"date": string;"grader_id": number;"assignment_id": number},
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
  return (await r.json()) as SubmissionHistory[];
};
