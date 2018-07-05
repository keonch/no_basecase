export const postQuestion = (question) => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/questions',
      data: {question}
    })
  );
};
