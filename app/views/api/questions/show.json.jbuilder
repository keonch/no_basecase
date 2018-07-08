json.question do
  json.set! @question.id do
    json.extract! @question, :id, :title, :body
    json.authorId @question.author_id
    json.createdAt @question.created_at
    json.votes @question.vote_sum
  end
end

json.answers do
  @question.answers.each do |answer|
      json.set! answer.id do
        json.extract! answer, :id, :body
        json.authorId answer.author_id
        json.createdAt answer.created_at
        json.votes answer.vote_sum
      end
  end
end

json.users do
  @question.answerers.each do |answerer|
    json.set! answerer.id do
      json.extract! answerer, :id, :name
    end
  end
end
