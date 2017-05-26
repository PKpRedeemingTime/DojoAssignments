class Product < ApplicationRecord
  belongs_to :user
  validates :name, :amount, :presence => true
end