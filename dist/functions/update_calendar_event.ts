

//IMPORTS
;
const baseUrl = "/v1/calendar_events/{id}";
const method = "PUT";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const update_calendar_event = async (
  token: string,
  baseUrl: string,
  params: {"id": string;"calendar_event[context_code]"?: string;"calendar_event[title]"?: string;"calendar_event[description]"?: string;"calendar_event[start_at]"?: undefined;"calendar_event[end_at]"?: undefined;"calendar_event[location_name]"?: string;"calendar_event[location_address]"?: string;"calendar_event[time_zone_edited]"?: string;"calendar_event[all_day]"?: boolean;"calendar_event[child_event_data][X][start_at]"?: undefined;"calendar_event[child_event_data][X][end_at]"?: undefined;"calendar_event[child_event_data][X][context_code]"?: string;"calendar_event[rrule]"?: string;"which"?: string;"calendar_event[blackout_date]"?: boolean},
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
