class Dojo < ApplicationRecord
    validates :branch, :street, :city, :state, presence:true
    validates :state, length: { is: 2 }
    has_many :students
end
