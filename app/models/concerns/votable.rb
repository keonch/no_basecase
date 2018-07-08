module Votable

  extend ActiveSupport::Concern

  included do
    has_many :votes,
      as: :votable,
      class_name: :Vote,
      dependent: :destroy
  end

  def vote_sum
    self.votes.reduce(0) { |sum, vote| sum += vote.value }
  end

end
