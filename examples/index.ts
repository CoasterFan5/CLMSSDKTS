import { CanvasLMS } from "../dist";

const canvas = new CanvasLMS({
  domain: "https://canvas.jmu.edu/api",
  accessToken: process.env.CANVAS_TOKEN!,
});

try {
  const courses = await canvas.listYourCourses({});

  if (courses) {
    for (const c of courses) {
      console.log(`${c.name} (${c.id})`);
      canvas
        .listAssignmentsAssignments({
          course_id: c.id.toString(),
          "include[]": ["submission", "score_statistics"],
        })
        .then((assignments) => {
          if (assignments) {
            for (const a of assignments) {
              if (
                !a.submission ||
                (!a.locked_for_user &&
                  a.submission.workflow_state == "unsubmitted")
              ) {
                console.log(`${c.name} (${c.id}) - ${a.name}`);
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
