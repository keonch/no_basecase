json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.partial! 'api/questions/question', question: question
    end
  end
end

json.users do
  @questions.map(&:author).each do |author|
    json.set! author.id do
      json.partial! 'api/users/user', user: author
    end
  end
end
