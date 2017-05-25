class User < ApplicationRecord
  has_many :events, dependent: :destroy
  has_many :attendees
  has_many :discussions
  has_many :events_attended, through: :attendees, source: :event
  has_secure_password
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :first_name, :last_name, :email, :location, :state, :presence => true 
  validates :email, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }
  validates :password, length: { minimum:8 }
  validates :state, length: { is:2 }
  before_save :email_lowercase
  def email_lowercase
    email.downcase!
  end
end
