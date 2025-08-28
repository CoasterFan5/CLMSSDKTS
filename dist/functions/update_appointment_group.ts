

//IMPORTS
;
const baseUrl = "/v1/appointment_groups/{id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_appointment_group = async (
  token: string,
  baseUrl: string,
  params: {"id": string;"appointment_group[context_codes]": unknown;"appointment_group[sub_context_codes]"?: unknown;"appointment_group[title]"?: string;"appointment_group[description]"?: string;"appointment_group[location_name]"?: string;"appointment_group[location_address]"?: string;"appointment_group[publish]"?: boolean;"appointment_group[participants_per_appointment]"?: number;"appointment_group[min_appointments_per_participant]"?: number;"appointment_group[max_appointments_per_participant]"?: number;"appointment_group[new_appointments][X]"?: unknown;"appointment_group[participant_visibility]"?: string;"appointment_group[allow_observer_signup]"?: boolean},
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
