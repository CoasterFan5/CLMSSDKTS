

//IMPORTS
import type {DiscussionTopic} from "../models/DiscussionTopic";
const baseUrl = "/v1/groups/{group_id}/discussion_topics/{topic_id}/duplicate";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const duplicate_discussion_topic_groups = async (
  token: string,
  baseUrl: string,
  params: {"group_id": string;"topic_id": string},
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
  return (await r.json()) as DiscussionTopic;
};
