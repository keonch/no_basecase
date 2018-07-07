export const postQuestion = (question) => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/questions',
      data: {question}
    })
  );
};

export const fetchQuestion = (questionId) => {
  return (
    $.ajax({
      url: `api/questions/${questionId}`
    })
  );
};

export const deleteQuestion = (questionId) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/questions/${questionId}`
    })
  );
};

export const updateQuestion = (questionId, question) => {
  return (
    $.ajax({
      method: 'PUT',
      url: `api/questions/${questionId}`,
      data: {question}
    })
  );
};
