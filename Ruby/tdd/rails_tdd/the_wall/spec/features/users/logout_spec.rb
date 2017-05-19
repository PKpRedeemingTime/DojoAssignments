require 'rails_helper'
feature "guest logs out" do
    before(:each) do
        create(:user)
        visit root_path
        fill_in "username", with: "Patrick"
        click_button "Sign In"
    end
    scenario "user should be able to logout" do
        expect(page).to have_link("Log Out")
        click_link("Log Out")
        expect(current_path).to eq(root_path)
    end
end