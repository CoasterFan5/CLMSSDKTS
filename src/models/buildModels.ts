import { swaggerLikeFormat } from "../swaggerLikeFormat";
import { typesMap } from "../typesMap";
import { getValidReturnType } from "../utils/getValidReturnType";
import fs from "fs/promises";

const builtModelTracker: Record<string, string> = {};

export const buildModels = async (
  data: typeof swaggerLikeFormat._type.models,
) => {
  for (const key in data) {
    const model = data[key];

    if (model.deprecated) {
      continue;
    }

    if (builtModelTracker[model.id]) {
      console.warn(`[WARN] Duplicate Model ${model.id}`);
    }

    const modelName = getValidReturnType(model.id);

    let propDetailsArray = [];
    const imports = [];

    for (const propertyId in model.properties) {
      const property = model.properties[propertyId];
      const isOptional = property.description
        ?.toLowerCase()
        .includes("optional");
      let propertyType = "string";

      if (property.type) {
        propertyType = typesMap[property.type];
      }
      if (property.$ref) {
        const refsName = getValidReturnType(property.$ref);
        imports.push(`import type {${refsName}} from "./${refsName}.ts";`);
        if (property.type && property.type == "array") {
          propertyType = `${refsName}[]`;
        } else {
          propertyType = refsName;
        }
      }

      const propertyKey = `${propertyId}${isOptional ? "?" : ""}`;
      propDetailsArray.push(`${propertyKey}: ${propertyType}`);
    }

    const importsString = `${imports.join("\n")}\n`;

    let builtModel = `${importsString}export type ${modelName} = {`;
    builtModel += propDetailsArray.join(",");
    builtModel += `}`;

    builtModelTracker[model.id] = modelName;
    await fs.writeFile(
      `./dist/models/${getValidReturnType(model.id)}.ts`,
      builtModel,
    );
  }
};
