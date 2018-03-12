json.question do
  json.partial! 'api/questions/question', question: @question
end

json.answers do
  # @questions.each do |question|
  #   json.set! question.id do
  #     if question.body.length > 188
  #       question.body = question.body[0...188] + '...'
  #     end
  #     json.extract! question, :id, :title, :body, :author_id
  #   end
  # end
end

json.users do
  json.set! @question.author.id do
    json.partial! 'api/users/user', user: @question.author
  end
end
