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
