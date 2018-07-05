class Question < ApplicationRecord
  validates :title, :body, :author_id, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  has_many :answers,
    class_name: :Answer,
    foreign_key: :question_id

  has_many :answerers,
    through: :answers,
    source: :author

  has_and_belongs_to_many :hashtags

end
