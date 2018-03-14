json.questions do
  @questions.each do |question|
    json.set! question.id do
      if question.body.length > 188
        question.body = question.body[0...188] + '...'
      end
      json.partial! 'api/questions/question', question: question

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
