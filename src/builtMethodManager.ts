import { snakeToCamelCase } from "./snakeToCamel";
import fs from "fs/promises";
const builtMethods: string[] = [];
const builtImports: string[] = [];

const nameList: string[] = [];

export const addMethod = (name: string) => {
  console.log(`adding`);
  if (nameList.includes(name)) {
    return;
  }
  nameList.push(name);
  builtImports.push(`import {${name}} from "./functions/${name}"`);
  builtMethods.push(
    `
  ${snakeToCamelCase(name)}(args: Parameters<typeof ${name}>[2]) {
  return ${name}(this.token, this.domain, args);
}`,
  );
};

export const createIndexFile = async () => {
  let d = (await fs.readFile("./dist/index.schema")).toString();
  d = d.replace("{{built_methods}}", builtMethods.join("\n"));
  d = d.replace("{{imports}}", builtImports.join("\n"));
  await fs.writeFile("./dist/index.ts", d);
};
