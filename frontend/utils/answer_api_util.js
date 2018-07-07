export const fetchAnswer = (questionId, answerId) => {
  return (
    $.ajax({
      url: `api/questions/${questionId}/answers/${answerId}`
    })
  );
};

export const postAnswer = (questionId, answer) => {
  return (
    $.ajax({
      method: 'POST',
      url: `api/questions/${questionId}/answers`,
      data: {answer}
    })
  );
};

export const deleteAnswer = (questionId, answerId) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/questions/${questionId}/answers/${answerId}`
    })
  );
};

export const updateAnswer = (questionId, answerId, answer) => {
  return (
    $.ajax({
      method: 'PUT',
      url: `api/questions/${questionId}/answers/${answerId}`,
      data: {answer}
    })
  );
};
