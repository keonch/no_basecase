export const upvoteQuestion = (questionId) => (
  $.ajax({
    method: 'POST',
    url: `api/questions/${questionId}/upvote`
  })
);

export const downvoteQuestion = (questionId) => (
  $.ajax({
    method: 'POST',
    url: `api/questions/${questionId}/downvote`
  })
);

export const upvoteAnswer = (questionId, answerId) => (
  $.ajax({
    method: 'POST',
    url: `api/questions/${questionId}/answers/${answerId}/upvote`
  })
);

export const downvoteAnswer = (questionId, answerId) => (
  $.ajax({
    method: 'POST',
    url: `api/questions/${questionId}/answers/${answerId}/downvote`
  })
);
