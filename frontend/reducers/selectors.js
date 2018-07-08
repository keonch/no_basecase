// returns an array of answer ids sorted by votes from high to low
export const sortAnswersByVotes = (answers) => {
  const result = [];
  Object.values(answers).forEach((answer) => {
    // TODO:
    // implement a sorting algorithm here!!!
    result.push(answer.id);
  })
  return result;
};

// returns an array of answer ids sorted by votes from high to low
export const sortQuestionsByVotes = (questions) => {
  const result = [];
  Object.values(questions).forEach((question) => {
    // TODO:
    // implement a sorting algorithm here!!!
    result.push(question.id);
  })
  return result;
};
