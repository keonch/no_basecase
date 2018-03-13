class Question < ApplicationRecord
  validates :title, :body, :author_id, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id

  has_many :answers,
    class_name: :Answer,
    foreign_key: :question_id,
    primary_key: :id

  has_many :answerers,
    through: :answers,
    source: :author
end
