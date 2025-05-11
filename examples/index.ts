import { CanvasLMS } from "../dist";

const canvas = new CanvasLMS({
  domain: "https://canvas.jmu.edu",
  accessToken: "k",
});

canvas.get("/v1/courses");
canvas.delete("/v1/shared_brand_configs/{id}");
