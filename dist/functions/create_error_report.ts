

//IMPORTS
;
const baseUrl = "/v1/error_reports";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_error_report = async (
  token: string,
  baseUrl: string,
  params: {"error[subject]": string;"error[url]"?: string;"error[email]"?: string;"error[comments]"?: string;"error[http_env]"?: undefined},
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
