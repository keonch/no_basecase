class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
  end
end
