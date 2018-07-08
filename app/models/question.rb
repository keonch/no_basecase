class Question < ApplicationRecord

  include Votable

  validates :title, :body, :trunc_body, :author_id, presence: true
  validates :answered, inclusion: { in: [ true, false ] }

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  has_many :answers,
    class_name: :Answer,
    foreign_key: :question_id

  has_many :answerers,
    through: :answers,
    source: :author

  # TODO chosen_answer feature
  # has_one :chosen_answer,
  #   through: :answers

  has_and_belongs_to_many :hashtags

end
