

//IMPORTS
import type {ePortfolioPage} from "../models/ePortfolioPage";
const baseUrl = "/v1/eportfolios/{eportfolio_id}/pages";
const method = "GET";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const get_eportfolio_pages = async (
  token: string,
  baseUrl: string,
  params: {"eportfolio_id": string},
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
  return (await r.json()) as ePortfolioPage[];
};
