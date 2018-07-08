json.answer do
  json.set! @answer.id do
    json.votes @answer.vote_sum
  end
end
