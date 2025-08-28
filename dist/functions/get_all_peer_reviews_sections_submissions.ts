

//IMPORTS
import type {PeerReview} from "../models/PeerReview";
const baseUrl = "/v1/sections/{section_id}/assignments/{assignment_id}/submissions/{submission_id}/peer_reviews";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_all_peer_reviews_sections_submissions = async (
  token: string,
  baseUrl: string,
  params: {"section_id": string;"assignment_id": string;"submission_id": string;"include"?: unknown},
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
  return (await r.json()) as PeerReview[];
};
