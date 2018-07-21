import { createSelector } from 'reselect';

// returns an array of ids sorted by votes from high to low
const sortByVotes = (entities) => {
  const sorted = Object.values(entities).sort((a, b) => (
    b.votes - a.votes
  ));
  return sorted.map((entity) => entity.id);
};

const sortByDate = (entities) => {
  const sorted = Object.values(entities).sort((a, b) => (
    Date.parse(b.createdAt) - Date.parse(a.createdAt)
  ));
  return sorted.map((entity) => entity.id);
}

const sortByActive = (entities) => {
  const sorted = Object.values(entities).sort((a, b) => (
    Date.parse(b.createdAt) - Date.parse(a.createdAt)
  ));
  return sorted.map((entity) => entity.id);
}

const sortByUnanswered = (questions) => {
  let unanswered = Object.values(questions).filter((question) => (
    question.answerCount === 0
  ));
  unanswered = unanswered.sort((a, b) => b.votes - a.votes);
  return unanswered.map((entity) => entity.id);
}

const sortByOldest = (answers) => {
  const sorted = Object.values(answers).sort((a, b) => (
    Date.parse(a.createdAt) - Date.parse(b.createdAt)
  ));
  return sorted.map((answer) => answer.id);
}

const selectSort = (sortType, state) => {
  switch (sortType) {
    case 'newest':
      return sortByDate(state);
    case 'active':
      return sortByActive(state);
    case 'unanswered':
      return sortByUnanswered(state);
    case 'oldest':
      return sortByOldest(state);
    default:
      return sortByVotes(state);
  }
}

// Reselect selectors for answers and questions
export const getSortedQuestionIds = createSelector(
  [selectSort],
  (sortedIds) => sortedIds
);

export const getSortedAnswerIds = createSelector(
  [selectSort],
  (sortedIds) => (sortedIds)
);
