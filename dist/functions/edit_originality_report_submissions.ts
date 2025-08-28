

//IMPORTS
import type {OriginalityReport} from "../models/OriginalityReport";
const baseUrl = "/lti/assignments/{assignment_id}/submissions/{submission_id}/originality_report/{id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const edit_originality_report_submissions = async (
  token: string,
  baseUrl: string,
  params: {"assignment_id": string;"submission_id": string;"id": string;"originality_report[originality_score]"?: number;"originality_report[originality_report_url]"?: string;"originality_report[originality_report_file_id]"?: number;"originality_report[tool_setting][resource_type_code]"?: string;"originality_report[tool_setting][resource_url]"?: string;"originality_report[workflow_state]"?: string;"originality_report[error_message]"?: string},
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
  return (await r.json()) as OriginalityReport;
};
