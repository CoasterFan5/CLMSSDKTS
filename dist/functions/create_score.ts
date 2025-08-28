

//IMPORTS
import type {resultUrlStringTheurltotheresultthatwascreated} from "../models/resultUrlStringTheurltotheresultthatwascreated";
const baseUrl = "/lti/courses/{course_id}/line_items/{line_item_id}/scores";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_score = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"line_item_id": string;"userId": string;"activityProgress": string;"gradingProgress": string;"timestamp": string;"scoreGiven"?: number;"scoreMaximum"?: number;"comment"?: string;"submission"?: undefined;"submission[submittedAt]"?: string;"https://canvas.instructure.com/lti/submission"?: undefined;"https://canvas.instructure.com/lti/submission[new_submission]"?: boolean;"https://canvas.instructure.com/lti/submission[preserve_score]"?: boolean;"https://canvas.instructure.com/lti/submission[prioritize_non_tool_grade]"?: boolean;"https://canvas.instructure.com/lti/submission[submission_type]"?: string;"https://canvas.instructure.com/lti/submission[submission_data]"?: string;"https://canvas.instructure.com/lti/submission[submitted_at]"?: string;"https://canvas.instructure.com/lti/submission[content_items]"?: undefined},
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
  return (await r.json()) as resultUrlStringTheurltotheresultthatwascreated[];
};
