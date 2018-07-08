export const fetchAnswer = (questionId, answerId) => (
  $.ajax({
    url: `api/questions/${questionId}/answers/${answerId}`
  })
);

export const postAnswer = (questionId, answer) => (
  $.ajax({
    method: 'POST',
    url: `api/questions/${questionId}/answers`,
    data: {answer}
  })
);

export const deleteAnswer = (questionId, answerId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/questions/${questionId}/answers/${answerId}`
  })
);

export const updateAnswer = (questionId, answerId, answer) => (
  $.ajax({
    method: 'PUT',
    url: `api/questions/${questionId}/answers/${answerId}`,
    data: {answer}
  })
);
