import fs from "fs/promises";
import { z } from "zod";

export const handleOverrides = async () => {
  const d = await fs.readFile("./overrides/deletions.json");
  const zodData = z
    .object({
      files: z.array(z.string()),
    })
    .safeParse(JSON.parse(d.toString()));

  if (zodData.error) {
    console.error(zodData.error);
    console.warn("Overrides not applied");
    return;
  }

  for (const f of zodData.data.files) {
    fs.rm(`./swagger/${f}`);
  }
};
