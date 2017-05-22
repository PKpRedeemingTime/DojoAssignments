class User < ApplicationRecord
  has_many :secrets
  has_many :likes, dependent: :destroy
  has_many :secrets_liked, through: :likes, source: :secret
  has_secure_password
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :name, :email, :presence => true 
  validates :email, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  before_save :email_lowercase
  def email_lowercase
    email.downcase!
  end
end
