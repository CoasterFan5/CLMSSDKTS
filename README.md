# CLMSSDKTS
A very meaninful name. The canvas LMS (unofficial) sdk with types!

## Some interesting aspects of this project.
Because Canvas is great software, some of their models, which I rely on for type generation, are duplicated, which isn't really supposed to happen. My solution is to just ignore them.

If you happen to be a power user of this project (why?), you can find the ignored routes by cloning the project, generating with a download, and then viewing the following files in the swagger directory
```
account_reports.json
accounts_(lti).json
course_pace.json
live_assessments.json
outcome_results.json
plagiarism_detection_submissions.json
progress.json
rubrics.json
what_if_grades.json
```

## Using
Don't. This repo just handles builds.

## Build
```
pnpm run generate
```
Built! (Hopefully)
