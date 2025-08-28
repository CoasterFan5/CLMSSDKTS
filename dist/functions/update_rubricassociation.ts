

//IMPORTS
import type {RubricAssociation} from "../models/RubricAssociation";
const baseUrl = "/v1/courses/{course_id}/rubric_associations/{id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_rubricassociation = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"id": number;"rubric_association[rubric_id]"?: number;"rubric_association[association_id]"?: number;"rubric_association[association_type]"?: string;"rubric_association[title]"?: string;"rubric_association[use_for_grading]"?: boolean;"rubric_association[hide_score_total]"?: boolean;"rubric_association[purpose]"?: string;"rubric_association[bookmarked]"?: boolean},
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
  return (await r.json()) as RubricAssociation;
};
