import { getRoutes } from "./getRoutes";
import { postRoutes } from "./postRoutes";
import { putRoutes } from "./putRoutes";
import { patchRoutes } from "./patchRoutes";
import { deleteRoutes } from "./deleteRoutes";

export type RouteTypes = {
  get: (typeof getRoutes)[number];
  post: (typeof postRoutes)[number];
  put: (typeof putRoutes)[number];
  patch: (typeof patchRoutes)[number];
  delete: (typeof deleteRoutes)[number];
};
