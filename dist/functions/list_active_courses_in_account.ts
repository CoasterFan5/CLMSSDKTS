

//IMPORTS
import type {Course} from "../models/Course";
const baseUrl = "/v1/accounts/{account_id}/courses";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const list_active_courses_in_account = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"with_enrollments"?: boolean;"enrollment_type"?: unknown;"published"?: boolean;"completed"?: boolean;"blueprint"?: boolean;"blueprint_associated"?: boolean;"public"?: boolean;"by_teachers"?: unknown;"by_subaccounts"?: unknown;"hide_enrollmentless_courses"?: boolean;"state"?: unknown;"enrollment_term_id"?: number;"search_term"?: string;"include"?: unknown;"sort"?: string;"order"?: string;"search_by"?: string;"starts_before"?: undefined;"ends_after"?: undefined;"homeroom"?: boolean},
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
  return (await r.json()) as Course[];
};
