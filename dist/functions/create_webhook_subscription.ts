

//IMPORTS
;
const baseUrl = "/lti/subscriptions";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_webhook_subscription = async (
  token: string,
  baseUrl: string,
  params: {"subscription[ContextId]": string;"subscription[ContextType]": string;"subscription[EventTypes]": undefined;"subscription[Format]": string;"subscription[TransportMetadata]": undefined;"subscription[TransportType]": string},
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
