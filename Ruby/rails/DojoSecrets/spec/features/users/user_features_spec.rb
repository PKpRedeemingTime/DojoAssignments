require 'rails_helper'
feature 'user features' do
    feature "create user" do
        before do
            visit root_path
            click_button "Create New Account!"
        end
        scenario "successfully creates a new user account" do
            fill_in "user[email]", with: "wonk@wonk.com"
            fill_in "user[name]", with: "Wonky"
            fill_in "user[password]", with: "password"
            fill_in "user[password_confirmation]", with: "password"
            click_button "Join"
            expect(current_path).to eq(root_path)
        end
        scenario "fails sign-in" do
            fill_in "user[email]", with: "invalid_email"
            fill_in "user[name]", with: ""
            fill_in "user[password]", with: ""
            fill_in "user[email]", with: "password"
            click_button "Join"
            expect(page).to have_content("Password can't be blank")
            expect(page).to have_content("Name can't be blank")
            expect(page).to have_content("Email is invalid")
            expect(current_path).to eq(new_user_path)
        end
    end
end