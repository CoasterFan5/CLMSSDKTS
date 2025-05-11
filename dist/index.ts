import { RouteTypes } from "./methods/routeTyper";
import { Account } from "./models/Account";

export class CanvasLMS {
  token: string;
  domain: string;

  constructor(args: { domain: string; accessToken: string }) {
    this.token = args.accessToken;
    this.domain = args.domain;
  }

  get(r: RouteTypes["get"]) {
    console.log(r);
  }

  post(r: RouteTypes["post"]) {
    console.log(r);
  }

  put(r: RouteTypes["put"]) {
    console.log(r);
  }
  patch(r: RouteTypes["patch"]) {
    console.log(r);
  }
  delete(r: RouteTypes["delete"]) {
    console.log(r);
  }
}
