// this file downloads everything
import z from "zod";
import fs from "fs/promises";
const docUrlBase = "https://canvas.jmu.edu/doc/api";
const routeListRoute = "api-docs.json";

const exists = async (route: string) => {
  try {
    await fs.access(route);
    return true;
  } catch {
    console.log("no exists");
    return false;
  }
};

export const downloadDocData = async () => {
  try {
    const startTime = performance.now();
    console.log("Starting api schema download");

    const fullUrl = `${docUrlBase}/${routeListRoute}`;
    const routeList = await fetch(fullUrl);
    const jsonData = await routeList.json();
    const data = z
      .object({
        apiVersion: z.string(),
        swaggerVersion: z.string(),
        apis: z.array(
          z.object({
            path: z.string(),
            description: z.string(),
          }),
        ),
      })
      .safeParse(jsonData);

    if (data.error) {
      throw data.error;
    }

    if (!(await exists("./swagger/index.json"))) {
      await fs.mkdir("./swagger", {
        recursive: true,
      });
    }
    await fs.writeFile(
      "./swagger/index.json",
      JSON.stringify(data.data, null, 4),
    );

    const dataList: Record<string, unknown> = {};

    // now we can have some fun
    for (const api of data.data.apis) {
      const rq = await fetch(`${docUrlBase}${api.path}`);
      fs.writeFile(
        `./swagger${api.path}`,
        JSON.stringify(await rq.json(), null, 4),
      );
    }

    const endTime = performance.now();

    console.info(`Downloaded in ${endTime - startTime}ms`);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
