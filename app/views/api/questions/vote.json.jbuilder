json.question do
  json.set! @question.id do
    json.votes @question.voteCount
  end
end
