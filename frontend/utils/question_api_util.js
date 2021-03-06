export const fetchAllQuestions = () => (
  $.ajax({
    url: `api/questions`
  })
);

export const fetchQuestion = (questionId) => (
  $.ajax({
    url: `api/questions/${questionId}`
  })
);

export const postQuestion = (question) => (
  $.ajax({
    method: 'POST',
    url: 'api/questions',
    data: {question}
  })
);

export const deleteQuestion = (questionId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/questions/${questionId}`
  })
);

export const updateQuestion = (questionId, question) => (
  $.ajax({
    method: 'PUT',
    url: `api/questions/${questionId}`,
    data: {question}
  })
);

export const search = (searchText) => (
  $.ajax({
    method: 'GET',
    url: 'api/search',
    data: {search_text: searchText}
  })
)
