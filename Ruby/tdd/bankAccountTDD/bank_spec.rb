require_relative 'bank'
RSpec.describe Bank do
    before(:each) do
        @user1 = Bank.new
        @user2 = Bank.new
        @user1.deposit("checking", 500)
        @user1.deposit("savings", 500)
    end
    it "Has a getter method for retrieving the checking account balance the total account balance" do
        expect(@user1.total).to eq("Checking Balance: 500\nSaving Balance: 500\nTotal Balance: 1000")
    end
    it "Has a function that allows the user to withdraw cash" do
        @user1.withdrawal("checking", 200)
        expect(@user1.total).to eq("Checking Balance: 300\nSaving Balance: 500\nTotal Balance: 800")
    end
    it "Raises an error if a user tries to withdraw more money than they have in the account" do
        expect{@user1.withdrawal("checking", 600)}.to raise_error(RuntimeError)
    end
    it "Raises an error when the user attempts to retrieve the total number of bank accounts" do
        expect{@user1.number_of_accounts}.to raise_error(NoMethodError)
    end
    it "Raises an error when the user attempts to retrieve the total number of bank accounts" do
        expect{@user1.interest_rate = 1}.to raise_error(NoMethodError)
    end
end