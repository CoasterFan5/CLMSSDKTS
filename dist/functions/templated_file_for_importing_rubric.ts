

//IMPORTS
import type {aCSVfileintheformatthatcanbeimported} from "../models/aCSVfileintheformatthatcanbeimported";
const baseUrl = "/v1/rubrics/upload_template";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const templated_file_for_importing_rubric = async (
  token: string,
  baseUrl: string,
  params: {},
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
  return (await r.json()) as aCSVfileintheformatthatcanbeimported;
};
