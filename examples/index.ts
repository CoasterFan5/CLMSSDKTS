import { CanvasLMS } from "../dist";

const canvas = new CanvasLMS({
  domain: "https://canvas.jmu.edu/api",
  accessToken: process.env.CANVAS_TOKEN!,
});

console.log(
  await canvas.removeCourseFromFavorites({
    id: "2036065",
  }),
);
