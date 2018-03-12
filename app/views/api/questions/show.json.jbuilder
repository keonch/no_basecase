json.question do
  json.partial! 'api/questions/question', question: @question
end

json.answers do
  @question.answers.each do |answer|
    json.set! answer.id do
      json.extract! answer, :id, :body, :author_id
    end
  end
end

json.users do

  json.set! @question.author.id do
    json.partial! 'api/users/user', user: @question.author
  end

  @question.answers.each do |answer|
    json.set! answer.author.id do
      json.extract! answer.author, :id, :name
    end
  end

end
