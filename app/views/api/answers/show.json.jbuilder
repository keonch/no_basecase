json.answer @answer, :id, :body, :author_id, :votes, :created_at, :question_id

json.author @answer.author, :id, :name
