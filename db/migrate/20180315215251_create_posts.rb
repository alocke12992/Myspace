class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :username
      t.string :body
      t.string :img

      t.timestamps
    end
  end
end
