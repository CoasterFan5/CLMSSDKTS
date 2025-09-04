import { URL } from "url";

//startstrip
type __PARAMS_LIST_STRING__ = Record<string, unknown>;
type __TYPE_DETAILS_NAME__ = "";
const __TYPE_DETAILS_IMPORT__ = "";
const __PARAM_LOCATION_MAP__: Record<string, "path" | "query"> = {};
//endstrip

/*
This code is generated
Report issues: https://github.com/CoasterFan5/CLMSSDKTS

*/
const locations = __PARAM_LOCATION_MAP__;

__TYPE_DETAILS_IMPORT__;
const funcUrl = "__URL__";
const method = "__METHOD__";

/**
 * __DESCRIPTION__
 */
export const __NAME__ = async (
  token: string,
  baseUrl: string,
  params: __PARAMS_LIST_STRING__,
) => {
  let newUrl = new URL(baseUrl + funcUrl);

  try {
    for (const key in params) {
      const value = params[key];
      if (locations[key] == "path") {
        newUrl = new URL(
          newUrl.toString().replaceAll(`%7B${key}%7D`, `${value}`),
        );
      } else if (locations[key] == "query") {
        if (Array.isArray(value)) {
          for (const n of value) {
            newUrl.searchParams.append(key, n);
          }
        } else {
          newUrl.searchParams.append(key, `${value}`);
        }
      }
    }
  } catch (e) {
    throw e;
  }

  try {
    newUrl.searchParams.set("per_page", "100");
    const toFetch = newUrl.toString();
    const r = await fetch(toFetch, {
      method: method,
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (r.status != 200) {
      throw r;
    }
    return (await r.json()) as __TYPE_DETAILS_NAME__;
  } catch (e) {
    throw e;
  }
};
