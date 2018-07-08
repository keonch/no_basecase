class AddAnsweredColumnToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :answered, :boolean, null: false, default: false
  end
end
