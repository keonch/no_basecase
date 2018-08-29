class AddGinIndexToQuestionAndAnswers < ActiveRecord::Migration[5.2]
  def change
    enable_extension "btree_gin"
    
    add_index :questions, :title, using: :gin
    add_index :questions, :body, using: :gin
    add_index :answers, :body, using: :gin
  end
end
