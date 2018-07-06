export const postAnswer = (questionId, answer) => {
  return (
    $.ajax({
      method: 'POST',
      url: `api/questions/${questionId}/answers`,
      data: {answer}
    })
  );
};
