import { addMethod } from "./builtMethodManager";
import { operationParams, swaggerLikeFormat } from "./swaggerLikeFormat";
import { typesMap } from "./typesMap";
import fs from "fs";
import { buildResponseType } from "./utils/responseType";
import { InputTypeBuilder } from "./utils/inputTypeBuilder";

const fnTextRaw = fs.readFileSync("./src/sampleFunction.ts").toString();

export const buildFunction = (args: {
  name: string;
  url: string;
  description: string;
  params: typeof operationParams._type;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  returnType: string;
  ref: string | undefined;
}) => {
  const inputTypeBuilder = new InputTypeBuilder(args.params);

  let fnText = fnTextRaw;

  const typeDetails = buildResponseType(args.returnType, args.ref);
  addMethod(args.name, args.description);

  fnText = fnText.replace(/\/\/startstrip.*?\/\/endstrip/gms, "");
  fnText = fnText.replace("__URL__", args.url);
  fnText = fnText.replace("__TYPE_DETAILS_IMPORT__", typeDetails.import);
  fnText = fnText.replace("__METHOD__", args.method);
  fnText = fnText.replace("__NAME__", args.name);
  fnText = fnText.replace(
    "__PARAMS_LIST_STRING__",
    inputTypeBuilder.toString(),
  );
  fnText = fnText.replace("__TYPE_DETAILS_NAME__", typeDetails.typeString);
  fnText = fnText.replace("__DESCRIPTION__", args.description);
  fnText = fnText.replace(
    "__PARAM_LOCATION_MAP__",
    inputTypeBuilder.getLocationMapString(),
  );

  return fnText;
};
