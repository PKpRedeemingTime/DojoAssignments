class User < ApplicationRecord
    has_many :posts
    has_many :messages
    has_many :owners
    has_many :comments, as: :imageable
    has_many :blogs, through: :owners
end
