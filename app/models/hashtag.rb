class Hashtag < ApplicationRecord
  validates :tag, presence: true

  has_and_belongs_to_many :questions

end
