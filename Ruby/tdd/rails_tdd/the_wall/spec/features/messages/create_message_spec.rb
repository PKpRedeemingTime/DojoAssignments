require 'rails_helper'
feature "user creates a message" do
    before(:each) do
        @user = create(:user)
        visit root_path
        fill_in "username", with: "Patrick"
        click_button "Sign In"
    end
    scenario "successfully creating a message" do
        fill_in "message", with: "Test message"
        click_button "Post a Message"
        expect(current_path).to eq(messages_path)
        expect(page).to have_content(Message.first.message)
    end
    scenario "unsuccessfully creating a message: empty" do
        fill_in "message", with: ""
        click_button "Post a Message"
        expect(current_path).to eq(messages_path)
        expect(page).to have_content("Message can't be blank Message is too short (minimum is 11 characters)")
    end
    scenario "unsuccessfully creating a message: too short" do
        fill_in "message", with: "Test"
        click_button "Post a Message"
        expect(current_path).to eq(messages_path)
        expect(page).to have_content("Message is too short")
    end
end