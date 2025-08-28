//startstrip
type __PARAMS_LIST_STRING__ = {};
type __TYPE_DETAILS_NAME__ = "";
const __TYPE_DETAILS_IMPORT__ = "";
//endstrip

/*
This code is generated
Report issues: https://github.com/CoasterFan5/CLMSSDKTS

*/

__TYPE_DETAILS_IMPORT__;
const baseUrl = "__URL__";
const method = "__METHOD__";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const __NAME__ = async (
  token: string,
  baseUrl: string,
  params: __PARAMS_LIST_STRING__,
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
  return (await r.json()) as __TYPE_DETAILS_NAME__;
};
