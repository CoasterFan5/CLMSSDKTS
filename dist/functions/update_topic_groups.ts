

//IMPORTS
;
const baseUrl = "/v1/groups/{group_id}/discussion_topics/{topic_id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_topic_groups = async (
  token: string,
  baseUrl: string,
  params: {"group_id": string;"topic_id": string;"title"?: string;"message"?: string;"discussion_type"?: string;"published"?: boolean;"delayed_post_at"?: undefined;"lock_at"?: undefined;"podcast_enabled"?: boolean;"podcast_has_student_posts"?: boolean;"require_initial_post"?: boolean;"assignment"?: undefined;"is_announcement"?: boolean;"pinned"?: boolean;"position_after"?: string;"group_category_id"?: number;"allow_rating"?: boolean;"only_graders_can_rate"?: boolean;"sort_order"?: string;"sort_order_locked"?: boolean;"expanded"?: boolean;"expanded_locked"?: boolean;"sort_by_rating"?: boolean;"specific_sections"?: string;"lock_comment"?: boolean},
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
