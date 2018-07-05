json.question do
  json.partial! 'api/questions/question', question: @question
end

@question.answers.each do |answer|
  json.answers do
      json.set! answer.id do
        json.extract! answer, :id, :body, :author_id, :created_at
      end
  end
end
