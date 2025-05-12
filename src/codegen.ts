// codegen time baby
import fs, { readdir } from "fs/promises";
import { swaggerLikeFormat } from "./swaggerLikeFormat";
import { snakeToCamelCase } from "./snakeToCamel";
import { buildFunction } from "./functionBuilder";
import { createIndexFile } from "./builtMethodManager";
const skipList = ["index.json"];

const typesMap: Record<string, string> = {
  integer: "number",
  "string|User": "string",
  number: "number",
  uuid: "string",
  string: "string",
  boolean: "boolean",
  object: "object",
  array: "unknown",
  date: "Date",
  void: "void",
};

export const codeGen = async () => {
  // lets load all the files, because that seems smart
  const routesArrays: {
    GET: string[];
    POST: string[];
    PUT: string[];
    PATCH: string[];
    DELETE: string[];
  } = {
    GET: [],
    POST: [],
    PUT: [],
    PATCH: [],
    DELETE: [],
  };

  const getValidReturnType = (returnType: string) => {
    return returnType.replaceAll(/[^a-zA-Z]/g, "");
  };

  const dir = await fs.readdir("./swagger");
  for (const fileName of dir) {
    if (skipList.includes(fileName)) {
      continue;
    }
    const fData = (await fs.readFile(`./swagger/${fileName}`)).toString();
    const newData = swaggerLikeFormat.safeParse(JSON.parse(fData));
    if (newData.error) {
      throw newData.error;
    }

    // lets do models now
    for (const m in newData.data.models) {
      const model = newData.data.models[m];

      let builtModel = `export type ${getValidReturnType(model.id)} = {`;
      // model builder pt 1
      let propDetailsArray = [];
      for (const propId in model.properties) {
        const propDetails = model.properties[propId];
        if (propDetails.type) {
          propDetailsArray.push(
            `${propId}${propDetails.description?.toLowerCase().includes("optional") ? "?" : ""}: ${typesMap[propDetails.type] || "string"}`,
          );
        }
      }
      builtModel += propDetailsArray.join(",");
      builtModel += `}`;
      await fs.writeFile(
        `./dist/models/${getValidReturnType(model.id)}.ts`,
        builtModel,
      );
    }

    // the actual routes

    for (const apiRoute of newData.data.apis) {
      for (const apiOperation of apiRoute.operations) {
        routesArrays[apiOperation.method].push(apiRoute.path);
        const newName = apiOperation.nickname;
        fs.writeFile(
          `./dist/functions/${newName}.ts`,
          buildFunction({
            name: newName,
            url: apiRoute.path,
            params: apiOperation.parameters,
            returnType: getValidReturnType(apiOperation.type),
            method: apiOperation.method,
            ref: apiOperation.items?.$ref
              ? getValidReturnType(apiOperation.items?.$ref)
              : "",
          }),
        );
      }
    }
  }

  await createIndexFile();
};
