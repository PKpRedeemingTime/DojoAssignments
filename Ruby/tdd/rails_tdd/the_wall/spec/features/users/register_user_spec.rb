require 'rails_helper'
feature "guest user creates an account" do
    scenario "successfully creates a new user account" do
        create(:user)
        visit root_path
        fill_in "username", with: "Patrick"
        click_button "Sign In"
        expect(page).to have_content "Welcome Patrick"
        expect(current_path).to eq(messages_path)
    end
    scenario "fails sign-in" do
        visit root_path
        fill_in "username", with: "Happy"
        click_button "Sign In"
        expect(page).to have_content("Could not find username")
        expect(current_path).to eq(root_path)
    end
end