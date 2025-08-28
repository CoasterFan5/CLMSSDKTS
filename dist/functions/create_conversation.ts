

//IMPORTS
;
const baseUrl = "/v1/conversations";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_conversation = async (
  token: string,
  baseUrl: string,
  params: {"recipients": unknown;"subject"?: string;"body": string;"force_new"?: boolean;"group_conversation"?: boolean;"attachment_ids"?: unknown;"media_comment_id"?: string;"media_comment_type"?: string;"mode"?: string;"scope"?: string;"filter"?: unknown;"filter_mode"?: string;"context_code"?: string},
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
  return (await r.json()) as void;
};
