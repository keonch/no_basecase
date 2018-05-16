json.users do
  json.set! @user.id do
    json.partial! 'api/users/user', user: @user
  end
end

if @questions
  json.questions do
    @questions.each do |question|
      json.set! question.id do
        json.extract! question, :id, :title
      end
    end
  end
end

if @answers
  json.answers do
    @answers.each do |answer|
      json.set! answer.id do
        json.extract! answer, :id, :question_id
      end
    end
  end
end
