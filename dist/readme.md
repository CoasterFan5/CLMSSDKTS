# Not yet ready for production use
## But you may certainly try.

Using:
```ts

const canvas = new CanvasLMS({
  domain: "https://canvas.jmu.edu/api", // Needs to include /api
  accessToken: process.env.CANVAS_TOKEN!, // This is a token
});

console.log(await canvas.listYourCourses({}));
// Will list all your courses

```

## Support
[Only via discord](https://discord.gg/UK74hqdSPc):
Go to `#general` or `#support` and ping me (@coaster) with whatever questions you may have.
