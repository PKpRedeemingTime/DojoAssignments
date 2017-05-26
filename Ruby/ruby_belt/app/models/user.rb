class User < ApplicationRecord
  has_many :products, dependent: :destroy
  has_secure_password
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :first_name, :last_name, :email, :presence => true 
  validates :email, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  validates :password, length: { minimum:8 }
  before_save :email_lowercase
  def email_lowercase
    email.downcase!
  end
end
