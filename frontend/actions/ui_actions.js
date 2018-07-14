export const SORT_QUESTIONS = 'SORT_QUESTIONS';
export const SORT_ANSWERS = 'SORT_ANSWERS';

export const sortQuestionsBy = (sortState) => {
  return ({
    type: SORT_QUESTIONS,
    sortQuestions: sortState
  });
};

export const sortAnswersBy = (sortState) => {
  return ({
    type: SORT_ANSWERS,
    sortAnswers: sortState
  });
};
