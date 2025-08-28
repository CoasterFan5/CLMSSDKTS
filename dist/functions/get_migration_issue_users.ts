

//IMPORTS
import type {MigrationIssue} from "../models/MigrationIssue";
const baseUrl = "/v1/users/{user_id}/content_migrations/{content_migration_id}/migration_issues/{id}";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_migration_issue_users = async (
  token: string,
  baseUrl: string,
  params: {"user_id": string;"content_migration_id": string;"id": string},
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
  return (await r.json()) as MigrationIssue;
};
