import { CanvasLMS } from "../dist";
import { User } from "../dist/models/User";

const canvas = new CanvasLMS({
  domain: "https://canvas.jmu.edu/api",
  accessToken: process.env.CANVAS_TOKEN!,
});

console.log(await canvas.listYourCourses({}));
