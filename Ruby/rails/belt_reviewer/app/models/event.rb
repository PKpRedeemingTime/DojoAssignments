class Event < ApplicationRecord
    belongs_to :user
    has_many :attendees
    has_many :discussions
    has_many :users, through: :attendees
    validates :name, :date, :location, :state, :presence => true
    validates :state, length: { is:2 }
end