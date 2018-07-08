class Vote < ApplicationRecord

  validates :user_id, uniqueness: { scope: [:votable_type, :votable_id] }

  belongs_to :votable, polymorphic: true

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

  def get_value(increment)
    if !self.value
      return increment
    elsif (self.value + increment).between?(-1, 1)
      return self.value + increment
    else
      return nil
    end
  end

end
