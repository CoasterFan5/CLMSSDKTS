

//IMPORTS
;
const baseUrl = "/v1/accounts/{account_id}/csp_settings/lock";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const lock_or_unlock_current_csp_settings_for_sub_accounts_and_courses = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"settings_locked": boolean},
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
