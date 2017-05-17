class Comment < ApplicationRecord
  belongs_to :imageable, polymorphic: true
end
