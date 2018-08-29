json.questions do
  @questions.each do |question|
    p question
    json.set! question.id do
      json.extract! question, :id, :title, :body
      json.authorId question.author_id
      json.createdAt question.created_at
      json.truncBody question.trunc_body
      json.votes question.vote_sum
      json.answerCount question.answers.length
    end
  end
end

json.users do
  @questions.each do |question|
    json.set! question.author.id do
      json.extract! question.author, :id, :name
    end
  end
end
