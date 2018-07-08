class Answer < ApplicationRecord

  include Votable

  validates :body, :author_id, :question_id, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  belongs_to :question,
    class_name: :Question,
    foreign_key: :question_id

end
