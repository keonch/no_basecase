class Answer < ApplicationRecord
  include Votable

  validates :body, :author_id, :question_id, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    inverse_of: :answers

  belongs_to :question,
    inverse_of: :answers
end
