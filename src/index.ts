import { downloadDocData } from "./download";

console.log("Generator!");

const main = async () => {
  await downloadDocData();
};

await main();

export {};
