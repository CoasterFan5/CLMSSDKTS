# Not yet ready for production use
NodeJs Canvas API Library Thing.

## Why Did I Make This?
The Canvas LMS API does not follow a standard format and therefore does not pair well with generated code, this project ignores those facts and attempts to make interacting the canvas api a little bit better.

## Using
I don't advise you do that, however, I will not stop you.

```ts

const canvas = new CanvasLMS({
  domain: "https://canvas.jmu.edu/api", // Needs to include /api
  accessToken: process.env.CANVAS_TOKEN!, // This is a token
});

console.log(await canvas.listYourCourses({}));
// Will list all your courses, something like this:
type CourseList = {
  id: number;
  sis_course_id: string;
  uuid: string;
  integration_id: string;
  sis_import_id: number;
  name: string;
  course_code: string;
  original_name: string;
  workflow_state: string;
  account_id: number;
  root_account_id: number;
  enrollment_term_id: number;
  grading_periods: unknown;
  grading_standard_id: number;
  grade_passback_setting: string;
  created_at: string;
  start_at: string;
  end_at: string;
  locale: string;
  enrollments: unknown;
  total_students?: number;
  default_view: string;
  syllabus_body?: string;
  needs_grading_count?: number;
  apply_assignment_group_weights: boolean;
  permissions?: object;
  is_public: boolean;
  is_public_to_auth_users: boolean;
  public_syllabus: boolean;
  public_syllabus_to_auth: boolean;
  public_description?: string;
  storage_quota_mb: number;
  storage_quota_used_mb: number;
  hide_final_grades: boolean;
  license: string;
  allow_student_assignment_edits: boolean;
  allow_wiki_comments: boolean;
  allow_student_forum_attachments: boolean;
  open_enrollment: boolean;
  self_enrollment: boolean;
  restrict_enrollments_to_course_dates: boolean;
  course_format: string;
  access_restricted_by_date?: boolean;
  time_zone: string;
  blueprint?: boolean;
  blueprint_restrictions?: object;
  blueprint_restrictions_by_object_type?: object;
  template?: boolean;
}[];
```

## Support
[Only via discord](https://discord.gg/UK74hqdSPc):
Go to `#general` or `#support` and ping me (@coaster) with whatever questions you may have.
