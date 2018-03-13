json.questions do
  @questions.each do |question|
    json.set! question.id do
      if question.body.length > 188
        question.body = question.body[0...188] + '...'
      end
      json.extract! question, :id, :title, :body, :author_id, :created_at
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
