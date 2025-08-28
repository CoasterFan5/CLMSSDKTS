

//IMPORTS
;
const baseUrl = "/v1/accounts/{account_id}/logins/{id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const edit_user_login = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"id": string;"login[unique_id]"?: string;"login[password]"?: string;"login[old_password]"?: string;"login[sis_user_id]"?: string;"login[integration_id]"?: string;"login[authentication_provider_id]"?: string;"login[workflow_state]"?: string;"login[declared_user_type]"?: string;"override_sis_stickiness"?: boolean},
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
