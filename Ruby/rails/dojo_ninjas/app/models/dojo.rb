class Dojo < ApplicationRecord
    has_many :ninjas
    validates :name, :city, :state, presence:true
    validates :state, length: { is: 2 }
end

before_destroy :close_dojo

def close_dojo
    Ninja.destroy.where(dojo_id: self.id)
end
