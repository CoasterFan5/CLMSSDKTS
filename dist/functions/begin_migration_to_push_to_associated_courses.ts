

//IMPORTS
import type {BlueprintMigration} from "../models/BlueprintMigration";
const baseUrl = "/v1/courses/{course_id}/blueprint_templates/{template_id}/migrations";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const begin_migration_to_push_to_associated_courses = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"template_id": string;"comment"?: string;"send_notification"?: boolean;"copy_settings"?: boolean;"send_item_notifications"?: boolean;"publish_after_initial_sync"?: boolean},
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
  return (await r.json()) as BlueprintMigration;
};
