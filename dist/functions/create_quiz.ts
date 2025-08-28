

//IMPORTS
import type {Quiz} from "../models/Quiz";
const baseUrl = "/v1/courses/{course_id}/quizzes";
const method = "POST";

const urlBuilder = (base: string, items: Record<string, string>) => {
  let newUrl = baseUrl;
  for (const key in items) {
    newUrl = newUrl.replaceAll(`{${key}}`, items[key]);
  }

  return base + newUrl;
};

export const create_quiz = async (
  token: string,
  baseUrl: string,
  params: {"course_id": string;"quiz[title]": string;"quiz[description]"?: string;"quiz[quiz_type]"?: string;"quiz[assignment_group_id]"?: number;"quiz[time_limit]"?: number;"quiz[shuffle_answers]"?: boolean;"quiz[hide_results]"?: string;"quiz[show_correct_answers]"?: boolean;"quiz[show_correct_answers_last_attempt]"?: boolean;"quiz[show_correct_answers_at]"?: undefined;"quiz[hide_correct_answers_at]"?: undefined;"quiz[allowed_attempts]"?: number;"quiz[scoring_policy]"?: string;"quiz[one_question_at_a_time]"?: boolean;"quiz[cant_go_back]"?: boolean;"quiz[access_code]"?: string;"quiz[ip_filter]"?: string;"quiz[due_at]"?: undefined;"quiz[lock_at]"?: undefined;"quiz[unlock_at]"?: undefined;"quiz[published]"?: boolean;"quiz[one_time_results]"?: boolean;"quiz[only_visible_to_overrides]"?: boolean},
) => {
  const r = await fetch(urlBuilder(baseUrl, params) + "?per_page=100", {
    method: method,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (r.status != 200) {
    throw r;
  }
  return (await r.json()) as Quiz;
};
