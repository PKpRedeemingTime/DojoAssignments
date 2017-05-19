class Message < ApplicationRecord
  belongs_to :user
  validates :message, :presence => true, length: { minimum: 11 }
  validates :user, :presence => true
end
