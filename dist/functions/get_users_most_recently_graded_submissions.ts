

//IMPORTS
import type {Submission} from "../models/Submission";
const baseUrl = "/v1/users/{id}/graded_submissions";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_users_most_recently_graded_submissions = async (
  token: string,
  baseUrl: string,
  params: {"id": string;"include"?: unknown;"only_current_enrollments"?: boolean;"only_published_assignments"?: boolean},
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
  return (await r.json()) as Submission[];
};
