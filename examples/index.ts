import { CanvasLMS } from "../dist";

const canvas = new CanvasLMS({
  domain: "https://canvas.jmu.edu/api",
  accessToken: process.env.CANVAS_TOKEN!,
});

try {
  const courses = await canvas.listYourCourses({});

  if (courses) {
    for (const c of courses) {
      canvas
        .listAssignmentsAssignments({
          course_id: c.id.toString(),
          "include[]": ["submission"],
        })
        .then((assignments) => {
          if (assignments) {
            for (const a of assignments) {
              if (a.submission) {
                console.log(a.submission);
              }
            }
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }
} catch (e) {
  console.error(e);
}
