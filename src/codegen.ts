// codegen time baby
import fs, { readdir } from "fs/promises";
import { swaggerLikeFormat } from "./swaggerLikeFormat";

const skipList = ["index.json"];

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

    for (const apiRoute of newData.data.apis) {
      for (const apiOperation of apiRoute.operations) {
        routesArrays[apiOperation.method].push(apiRoute.path);
      }
    }
  }

  const replaceVars: Record<string, string> = {};
  replaceVars["GET_ROUTES"] = routesArrays["GET"]
    .map((item) => `"${item}"`)
    .join(",");
  replaceVars["POST_ROUTES"] = routesArrays["POST"]
    .map((item) => `"${item}"`)
    .join(",");
  replaceVars["PUT_ROUTES"] = routesArrays["PUT"]
    .map((item) => `"${item}"`)
    .join(",");
  replaceVars["PATCH_ROUTES"] = routesArrays["PATCH"]
    .map((item) => `"${item}"`)
    .join(",");
  replaceVars["DELETE_ROUTES"] = routesArrays["DELETE"]
    .map((item) => `"${item}"`)
    .join(",");

  // Update the methods page
  const dirReading = await readdir("./dist/methods");
  for (const fileName of dirReading) {
    const fileArray = fileName.split(".");
    if (fileArray[1] == "schema") {
      let fileData = (
        await fs.readFile(`./dist/methods/${fileName}`)
      ).toString();

      for (const rv in replaceVars) {
        fileData = fileData.replaceAll(`{{${rv}}}`, replaceVars[rv]);
      }

      await fs.writeFile(`./dist/methods/${fileArray[0]}.ts`, fileData);
    }
  }
};
