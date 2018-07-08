json.answer do
  json.set! @answer.id do
    json.extract! @answer, :id, :body
    json.authorId @answer.author_id
    json.createdAt @answer.created_at
    json.votes @answer.vote_sum
  end
end

json.user do
  json.set! @answer.author_id do
    json.partial! 'api/users/user', user: @answer.author
  end
end
