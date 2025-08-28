

//IMPORTS
import type {SubmissionComment} from "../models/SubmissionComment";
const baseUrl = "/v1/courses/{course_id}/assignments/{assignment_id}/submissions/{user_id}/comments/{id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const edit_submission_comment = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"assignment_id": string;"user_id": string;"id": string;"comment"?: string},
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
  return (await r.json()) as SubmissionComment;
};
