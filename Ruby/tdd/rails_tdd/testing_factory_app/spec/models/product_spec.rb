require 'rails_helper'

RSpec.describe Product, type: :model do
  it "should be a valid product" do 
    expect(build(:product)).to be_valid # build(:product) simplified
  end
  context "With invalid attributes" do 
    it "should not save if first_name field is blank" do
      expect(build(:product, name: "")).to be_invalid
    end
  end
end
