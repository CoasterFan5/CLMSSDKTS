import { codeGen } from "./codegen";
import { downloadDocData } from "./download";

let skipDownload = process.env.SKIP_DOWNLOAD;
const main = async () => {
  if (!skipDownload || skipDownload.toLowerCase() != "true") {
    await downloadDocData();
  } else {
    console.warn("Skipped Download");
  }

  await codeGen();
};

await main();

export {};
