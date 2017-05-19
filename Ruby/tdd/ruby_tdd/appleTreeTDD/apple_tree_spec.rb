require_relative "apple_tree"

RSpec.describe AppleTree do
    before(:each) do
        @tree = AppleTree.new
    end
    it "should have an age attribute with getter and setter methods" do
        @tree.age = 4
        expect(@tree.age).to eq(4)
    end
    it "should have height and apple_count attributes with only a getter method" do
        expect(@tree.height).to eq(3)
        expect(@tree.apple_count).to eq(0)
        expect{@tree.height = 10}.to raise_error(NoMethodError)
        expect{@tree.apple_count = 10}.to raise_error(NoMethodError)
    end
    it "should have a method called year_gone_by which adds one year to the age of the tree, increases the height by 10%, and grows no apples the first three years" do
        for x in 1..2
            @tree.year_gone_by
        end
        expect(@tree.age).to eq(2)
        expect(@tree.height).to eq(3.630000000000001)
        expect(@tree.apple_count).to eq(0)
    end
    context "should start growing apples in year 3" do
        before(:each) do
            for x in 1..10
                @tree.year_gone_by
            end
        end
        it "should grow two apples each in years 3 - 10" do
            expect(@tree.age).to eq(10)
            expect(@tree.height).to eq(7.781227380300005)
            expect(@tree.apple_count).to eq(16)
        end
        it "stops growing apples after year 10" do
            @tree.year_gone_by
            expect(@tree.apple_count).to eq(16)
        end
        it "should have a method called pick_apples that takes all of the apples off the tree" do
            @tree.pick_apples
            expect(@tree.apple_count).to eq(0)
        end
    end
end