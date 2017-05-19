require 'rails_helper'

RSpec.describe User do
  context "With valid attributes" do 
    it "should save" do 
      user = User.new(
        first_name: 'shane',
        last_name: 'chang',
        email: 'schang@codingdojo.com'
      )
      expect(user).to be_valid
    end
  end
  context "With invalid attributes" do 
    it "should not save if first_name field is blank" do
      user = User.new(
            first_name: '', 
            last_name: 'chang', 
            email: 'schang@codingdojo.com'
        )
      expect(user).to be_invalid
    end
    it "should not save if last_name field is blank"do
      user = User.new(
            first_name: 'chang', 
            last_name: '', 
            email: 'schang@codingdojo.com'
        )
      expect(user).to be_invalid
    end
    it "should not save if email already exists." do
      User.create(
        first_name: "Wonky",
        last_name: "McWonkerson",
        email: "wonk@wonk.com"
      )
      user = User.new(
        first_name: "Wonky",
        last_name: "McWonkerson",
        email: "wonk@wonk.com"
      )
      expect(user).to be_invalid
    end
    it "should not save if invalid email format" do
      user = User.new(
            first_name: 'chang', 
            last_name: 'chang', 
            email: 'schangcodingdojo.com'
        )
      expect(user).to be_invalid
    end
  end
end
