class AddCommentToComment < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :comment, :text
  end
end
