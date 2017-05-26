class PurchasesController < ApplicationController
  def create
    @product = Product.find(params[:id])
    @user = User.find(current_user)
    @purchase = Purchase.new(name: @product.name, amount: @product.amount, seller: @product.user.first_name, user: @user)
    if @purchase.save
      redirect_to "/sales/#{@product.id}/create"
    else
      flash[:errors] = @purchase.errors.full_messages
      redirect_to :back
    end
  end
end
