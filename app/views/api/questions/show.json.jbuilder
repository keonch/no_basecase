json.question do
  json.partial! 'api/questions/question', question: @question
end

@question.answers.each do |answer|
  json.answers do
      json.set! answer.id do
        json.extract! answer, :id, :body, :author_id
      end
  end
end

json.users do

  json.set! @question.author.id do
    json.partial! 'api/users/user', user: @question.author
  end

  @question.answerers.each do |answerer|
    json.set! answerer.id do
      json.extract! answerer, :id, :name
    end
  end

end
