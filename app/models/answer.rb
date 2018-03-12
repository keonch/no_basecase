class Answer < ApplicationRecord
  validates :body, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  belongs_to :question,
    class_name: :Question,
    foreign_key: :question_id,
    primary_key: :id
end
