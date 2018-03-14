class Question < ApplicationRecord
  include Votable

  validates :title, :body, :author_id, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,
    inverse_of: :questions

  has_many :answers,
    inverse_of: :question

  has_many :answerers,
    through: :answers,
    source: :author
end
