require_relative "apple_tree"
RSpec.describe AppleTree do
    before(:each) do
        @tree = AppleTree.new
    end
    it "should have an age attribute with getter and setter methods" do
        @tree.age = 4
        expect(@tree.age).to eq(4)
    end
end