class CreateJoinTableQuestionHashtag < ActiveRecord::Migration[5.2]
  def change
    create_join_table :questions, :hashtags do |t|
      t.index [:question_id, :hashtag_id]
      t.index [:hashtag_id, :question_id]
    end
  end
end
