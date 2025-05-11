import { CanvasLMS } from "../dist";
import { User } from "../dist/models/User";

const canvas = new CanvasLMS({
  domain: "https://canvas.jmu.edu",
  accessToken: "k",
});

canvas.get("/v1/users/{id}");
canvas.delete("/v1/shared_brand_configs/{id}");
