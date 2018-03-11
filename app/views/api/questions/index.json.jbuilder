json.questions do
  @questions.each do |question|
    json.set! question.id do
      if question.body.length > 188
        question.body = question.body[0...188] + '...'
      end
      json.extract! question, :id, :title, :body, :author_id
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
