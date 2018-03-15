json.questions do

  json.order @sorted

  @questions.each do |question|
    json.set! question.id do
      json.extract! question, :id, :title, :author_id, :created_at, :votes

      json.answersCount question.answers.count
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
