

//IMPORTS
import type {Conversation} from "../models/Conversation";
const baseUrl = "/v1/conversations";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_conversations = async (
  token: string,
  baseUrl: string,
  params: {"scope"?: string;"filter"?: unknown;"filter_mode"?: string;"interleave_submissions"?: boolean;"include_all_conversation_ids"?: boolean;"include"?: unknown},
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
  return (await r.json()) as Conversation[];
};
