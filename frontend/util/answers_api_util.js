export const createAnswer = (answer) => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/question'
    })
  );
};
