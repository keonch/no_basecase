// returns an array of ids sorted by votes from high to low
export const sortByVotes = (entities) => {
  const sorted = Object.values(entities).sort((a, b) => (
    b.votes - a.votes
  ));
  return sorted.map((entity) => entity.id);
};

export const sortByDate = (entities) => {
  const sorted = Object.values(entities).sort((a, b) => (
    Date.parse(b.createdAt) - Date.parse(a.createdAt)
  ));
  return sorted.map((entity) => entity.id);
}

export const sortByActive = (entities) => {
  const sorted = Object.values(entities).sort((a, b) => (
    Date.parse(b.createdAt) - Date.parse(a.createdAt)
  ));
  return sorted.map((entity) => entity.id);
}

export const sortByUnanswered = (questions) => {
  let unanswered = Object.values(questions).filter((question) => (
    question.answerCount === 0
  ));
  unanswered = unanswered.sort((a, b) => b.votes - a.votes);
  return unanswered.map((entity) => entity.id);
}

export const sortByOldest = (answers) => {
  const sorted = Object.values(answers).sort((a, b) => (
    Date.parse(a.createdAt) - Date.parse(b.createdAt)
  ));
  return sorted.map((answer) => answer.id);
}
