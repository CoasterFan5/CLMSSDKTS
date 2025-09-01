import { addMethod } from "./builtMethodManager";
import { operationParams, swaggerLikeFormat } from "./swaggerLikeFormat";
import { typesMap } from "./typesMap";
import fs from "fs";

const typeBuilder = (typeName: string, ref: string | undefined) => {
  switch (typeName) {
    case "array":
      return {
        import: `import type {${ref}} from "../models/${ref}"`,
        typeName: `${ref}[]`,
      };
    case "boolean":
      return {
        import: "",
        typeName: "{}",
      };
    case "void":
      return {
        import: "",
        typeName: "void",
      };
    default:
      return {
        import: `import type {${typeName}} from "../models/${typeName}"`,
        typeName: `${typeName}`,
      };
  }
};

export const buildFunction = (args: {
  name: string;
  url: string;
  description: string;
  params: typeof operationParams._type;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  returnType: string;
  ref: string | undefined;
}) => {
  const paramList = args.params.map((item) => {
    return `"${item.name}"${item.required ? "" : "?"}: ${typesMap[item.type]}`;
  });
  const paramListString = `{${paramList.join(";")}}`;
  const typeDetails = typeBuilder(args.returnType, args.ref);
  addMethod(args.name, args.description);

  let fnText = fs.readFileSync("./src/sampleFunction.ts").toString();

  fnText = fnText.replace(/\/\/startstrip.*?\/\/endstrip/gms, "");
  fnText = fnText.replace("__URL__", args.url);
  fnText = fnText.replace("__TYPE_DETAILS_IMPORT__", typeDetails.import);
  fnText = fnText.replace("__METHOD__", args.method);
  fnText = fnText.replace("__NAME__", args.name);
  fnText = fnText.replace("__PARAMS_LIST_STRING__", paramListString);
  fnText = fnText.replace("__TYPE_DETAILS_NAME__", typeDetails.typeName);
  fnText = fnText.replace("__DESCRIPTION__", args.description);

  return fnText;
};
