import { CanvasLMS } from "../dist";

const canvas = new CanvasLMS({
  domain: "https://canvas.jmu.edu/api",
  accessToken: process.env.CANVAS_TOKEN!,
});
const courses = await canvas.listYourCourses({});

if (courses) {
  for (const c of courses) {
    console.log(c.id);

    canvas
      .listAssignmentsAssignments({
        course_id: c.id.toString(),
      })
      .then((assignments) => {
        if (assignments) {
          for (const a of assignments) {
            console.log(`${c.name} - ${a.name}`);
          }
        }
      })
      .catch((e) => {
        console.error(e);
      });

    canvas
      .listAssignmentsAssignments({
        course_id: c.id.toString(),
        include: ["submission"],
      })
      .then((assignments) => {
        if (assignments) {
          for (const a of assignments) {
            console.log(a);
          }
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }
}
