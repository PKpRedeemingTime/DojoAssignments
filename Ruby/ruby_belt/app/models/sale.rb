class Sale < ApplicationRecord
  belongs_to :user
  validates :name, :amount, :buyer, :presence => true
end
