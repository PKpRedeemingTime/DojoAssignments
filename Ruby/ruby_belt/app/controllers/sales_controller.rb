class SalesController < ApplicationController
  def create
    @product = Product.find(params[:id])
    @user = User.find(current_user)
    @sale = Sale.new(name: @product.name, amount: @product.amount, buyer: @user.first_name, user: @product.user)
    if @sale.save
      redirect_to "/products/#{@product.id}/destroy"
    else
      flash[:errors] = @sale.errors.full_messages
      redirect_to :back
    end
  end
end
