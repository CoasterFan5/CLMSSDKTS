

//IMPORTS
import type {MigrationIssue} from "../models/MigrationIssue";
const baseUrl = "/v1/accounts/{account_id}/content_migrations/{content_migration_id}/migration_issues/{id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_migration_issue_accounts = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"content_migration_id": string;"id": string;"workflow_state": string},
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
