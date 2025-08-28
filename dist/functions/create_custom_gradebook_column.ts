

//IMPORTS
import type {CustomColumn} from "../models/CustomColumn";
const baseUrl = "/v1/courses/{course_id}/custom_gradebook_columns";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_custom_gradebook_column = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"column[title]": string;"column[position]"?: number;"column[hidden]"?: boolean;"column[teacher_notes]"?: boolean;"column[read_only]"?: boolean},
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
  return (await r.json()) as CustomColumn;
};
