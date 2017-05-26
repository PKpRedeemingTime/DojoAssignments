class Purchase < ApplicationRecord
  belongs_to :user
  validates :name, :amount, :seller, :presence => true
end
