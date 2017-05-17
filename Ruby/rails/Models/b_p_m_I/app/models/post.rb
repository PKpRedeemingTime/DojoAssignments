class Post < ApplicationRecord
  belongs_to :blog, dependent: :destroy
  has_many :messages
  validates :title, :content, presence:true
  validates :title, length: { minimum: 7 }
end
