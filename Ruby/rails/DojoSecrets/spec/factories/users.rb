FactoryGirl.define do
  factory :user do
    name "Patrick"
    email "me@me.com"
    password "password"
    password_confirmation "password"
  end
end
