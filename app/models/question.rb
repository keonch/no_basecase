class Question < ApplicationRecord
  include Votable

  validates :title, :body, :author_id, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  has_many :answers,
    inverse_of: :question

  has_many :answerers,
    through: :answers,
    source: :author

  # def self.answersCount
  #   Question.select('questions.*, answers').count
  # end
end
