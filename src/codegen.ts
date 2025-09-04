// codegen time baby
import fs, { readdir } from "fs/promises";
import { swaggerLikeFormat } from "./swaggerLikeFormat";
import { snakeToCamelCase } from "./snakeToCamel";
import { buildFunction } from "./functionBuilder";
import { createIndexFile } from "./builtMethodManager";
import { buildModels } from "./models/buildModels";
import { getValidReturnType } from "./utils/getValidReturnType";
import chalk from "chalk";

const skipList = [
  "index.json",
  "what_if_grades.json",
  "plagiarism_detection_submissions.json",
  "rubrics.json",
  "live_assessments.json",
  "course_pace.json",
  "progress.json",
  "outcome_results.json",
  "account_reports.json",
  "accounts_(lti).json",
];

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

  const startTime = Date.now();
  console.info("Starting Codegen");

  const dir = await fs.readdir("./swagger");
  for (const fileName of dir) {
    if (skipList.includes(fileName)) {
      console.info(chalk.yellow(`Skipping ${fileName}`));
      continue;
    }

    const fData = (await fs.readFile(`./swagger/${fileName}`)).toString();
    const newData = swaggerLikeFormat.safeParse(JSON.parse(fData));
    if (newData.error) {
      throw newData.error;
    }

    // lets do models now
    const duplicate = await buildModels(newData.data.models, fileName);

    // the actual routes

    for (const apiRoute of newData.data.apis) {
      for (const apiOperation of apiRoute.operations) {
        const newName = apiOperation.nickname;
        await fs.writeFile(
          `./dist/functions/${newName}.ts`,
          buildFunction({
            name: newName,
            url: apiRoute.path,
            description: apiRoute.description,
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

  const endTime = Date.now();
  const timeTaken = endTime - startTime;
  console.info(`Codegen done in ${timeTaken}ms`);
};
