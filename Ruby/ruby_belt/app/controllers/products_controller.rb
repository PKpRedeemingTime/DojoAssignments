class ProductsController < ApplicationController
  def create
    product = Product.new(product_params)
    if product.save
      flash[:notice] = "You have successfully listed a product for sale!"
        redirect_to :back
    else
        flash[:errors] = product.errors.full_messages
        redirect_to :back
    end
  end
  def destroy
    @user = User.find(current_user)
    Product.find(params[:id]).destroy
    redirect_to "/users/#{@user.id}"
  end
  def index
    @user = User.find(current_user)
    @products = Product.all 
    @count = Product.all.count
  end
  private
    def product_params
      params.require(:product).permit(:name, :amount).merge(user: current_user)
    end
end
