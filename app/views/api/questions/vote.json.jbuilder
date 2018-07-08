json.question do
  json.set! @question.id do
    json.votes @question.vote_sum
  end
end
