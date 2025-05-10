const downloadUrl =
  "https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/7.13.0/openapi-generator-cli-7.13.0.jar";

import fs from "fs";

// download this boy

const downloadCodeServer = async () => {
  const rq = await fetch(downloadUrl);
  const d = await rq.bytes();
  fs.writeFileSync("builder.jar", d);
};

await downloadCodeServer();
export {};
