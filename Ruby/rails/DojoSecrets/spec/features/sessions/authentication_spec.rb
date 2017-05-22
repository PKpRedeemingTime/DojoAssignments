require 'rails_helper'
feature "authentication feature" do
    before do
        @user = create(:user)
    end
    feature "user sign-in" do
        scenario 'visits sign-in page' do
            visit root_path
            expect(page).to have_field('Email')
        end
        scenario 'user successfully signs-in' do
            log_in
            expect(current_path).to eq("/users/#{@user.id}")
            expect(page).to have_text(@user.name)
        end
        scenario 'user enters incorrect email' do
            log_in email: "woky@wonky.com"
            expect(current_path).to eq(root_path)
            expect(page).to have_text('Invalid Combination')
        end
        scenario 'user enters incorrect password' do
            log_in password: "wrongpassword"
            expect(current_path).to eq(root_path)
            expect(page).to have_text('Invalid Combination')
        end
    end
    feature "user log-out" do
        before do
            log_in
        end
        scenario 'log-out button exists if user is logged in' do
            expect(page).to have_button('Log Out')
        end
        scenario 'user logs out' do
            click_button "Log Out"
            expect(current_path).to eq(root_path)
        end
    end
end