class AddUniqueConstraintOnUser < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :session_token, :string, null: false, unique: true
  end
end
