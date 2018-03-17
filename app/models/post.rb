class Post < ApplicationRecord
  belongs_to :user

  def self.set_name
    Post.find_by_sql('
      SELECT posts.id, title, body, user_id, users.name
      FROM posts
      LEFT JOIN users
        ON users.id = posts.user_id
      ')
  end

end
