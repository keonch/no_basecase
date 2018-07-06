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
