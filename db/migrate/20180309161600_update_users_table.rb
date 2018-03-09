class UpdateUsersTable < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :name, :string, null: true
  end
end
