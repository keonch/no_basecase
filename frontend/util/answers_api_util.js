export const createAnswer = (questionId, answer) => {
  return (
    $.ajax({
      method: 'POST',
      url: `api/questions/${questionId}/answers`,
      data: { answer }
    })
  );
};

export const deleteAnswer = (questionId, id) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/questions/${questionId}/answers/${id}`
    })
  );
};
