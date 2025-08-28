

//IMPORTS
;
const baseUrl = "/v1/users/{user_id}/tokens/{id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_access_token = async (
  token: string,
  baseUrl: string,
  params: {"user_id": string;"id": string;"token[purpose]"?: string;"token[expires_at]"?: undefined;"token[scopes]"?: unknown;"token[regenerate]"?: boolean},
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
