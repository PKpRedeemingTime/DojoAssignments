class User < ApplicationRecord
    EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
    validates :first_name, :last_name, presence: true, length: { minimum:2 }
    validates :age, presence: true, numericality: { greater_than: 9, less_than: 150 }
    validates :email_address, presence: true, format: { with: EMAIL_REGEX }
end
