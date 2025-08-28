

//IMPORTS
import type {LearningObjectDates} from "../models/LearningObjectDates";
const baseUrl = "/v1/courses/{course_id}/discussion_topics/{discussion_topic_id}/date_details";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_learning_object_s_date_information_discussion_topics = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"discussion_topic_id": string},
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
  return (await r.json()) as LearningObjectDates;
};
