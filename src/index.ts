import { codeGen } from "./codegen";
import { downloadDocData } from "./download";
import { handleOverrides } from "./overrides/handleOverrides";

let skipDownload = process.env.SKIP_DOWNLOAD;
const main = async () => {
  if (!skipDownload || skipDownload.toLowerCase() != "true") {
    await downloadDocData();
  } else {
    console.warn("Skipped Download");
  }

  await handleOverrides();

  await codeGen();
};

await main();

export {};
