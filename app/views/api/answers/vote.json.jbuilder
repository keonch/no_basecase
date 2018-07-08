json.answer do
  json.set! @answer.id do
    json.votes @answer.voteCount
  end
end
