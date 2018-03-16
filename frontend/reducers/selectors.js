export const selectAnswers = answers => {
  const result = Object.values(answers).sort((a,b) => {
    return b.votes - a.votes;
  });
  return result;
};
