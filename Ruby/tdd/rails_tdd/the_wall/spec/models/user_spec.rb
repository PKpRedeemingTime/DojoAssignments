require 'rails_helper'

RSpec.describe User, type: :model do
  context "With valid attributes" do 
    it "should save" do 
      expect(build(:user)).to be_valid
    end
  end
  context "With invalid attributes" do 
    it "should not save if username field is blank" do
      expect(build(:user, username: "")).to be_invalid
    end
    it "should not save if username field is 5 characters or fewer" do
      expect(build(:user, username: "Name")).to be_invalid
    end
    it "should not save if username already exists" do
      newuser = create(:user, username: "Patrick")
      expect(build(:user)).to be_invalid
    end
  end
end