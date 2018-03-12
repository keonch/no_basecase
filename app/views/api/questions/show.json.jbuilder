json.question do
  json.partial! 'api/questions/question', question: @question
end

json.users do
  json.set! @question.author.id do
    json.partial! 'api/users/user', user: @question.author
  end
end
