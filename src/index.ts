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

  /*
    Overrides are coming, for now, there is a skiplist codegen.ts
  */
  // await handleOverrides();

  await codeGen();
};

await main();

export {};
