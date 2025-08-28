

//IMPORTS
import type {User} from "../models/User";
const baseUrl = "/v1/accounts/{account_id}/users";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_user = async (
  token: string,
  baseUrl: string,
  params: {"account_id": string;"user[name]"?: string;"user[short_name]"?: string;"user[sortable_name]"?: string;"user[time_zone]"?: string;"user[locale]"?: string;"user[terms_of_use]"?: boolean;"user[skip_registration]"?: boolean;"pseudonym[unique_id]": string;"pseudonym[password]"?: string;"pseudonym[sis_user_id]"?: string;"pseudonym[integration_id]"?: string;"pseudonym[send_confirmation]"?: boolean;"pseudonym[force_self_registration]"?: boolean;"pseudonym[authentication_provider_id]"?: string;"communication_channel[type]"?: string;"communication_channel[address]"?: string;"communication_channel[confirmation_url]"?: boolean;"communication_channel[skip_confirmation]"?: boolean;"force_validations"?: boolean;"enable_sis_reactivation"?: boolean;"destination"?: undefined;"initial_enrollment_type"?: string;"pairing_code[code]"?: string},
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
  return (await r.json()) as User;
};
