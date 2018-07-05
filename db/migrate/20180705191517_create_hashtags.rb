class CreateHashtags < ActiveRecord::Migration[5.2]
  def change
    create_table :hashtags do |t|
      t.string :tag, null: false
      t.text :description

      t.timestamps
    end
  end
end
