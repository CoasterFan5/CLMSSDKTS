import { codeGen } from "./codegen";
import { downloadDocData } from "./download";

let skipDownload = true;
const main = async () => {
  if (!skipDownload) {
    await downloadDocData();
  } else {
    console.warn("Skipped Download");
  }

  await codeGen();
};

await main();

export {};
