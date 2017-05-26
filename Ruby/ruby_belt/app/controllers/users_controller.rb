class UsersController < ApplicationController
    before_action :require_user, except: [:new, :create]
    skip_before_action :require_login, only: [:create]
    def show
        @user = User.find(current_user)
        @products = Product.where(user_id: current_user.id)
        @sales = Sale.where(user_id: current_user.id)
        @purchases = Purchase.where(user_id: current_user.id)
        @count1 = Product.where(user_id: current_user.id).count
        @count2 = Sale.where(user_id: current_user.id).count
        @count3 = Purchase.where(user_id: current_user.id).count
        @total_s = Sale.where(user_id: current_user.id).sum(:amount)
        @total_p = Purchase.where(user_id: current_user.id).sum(:amount)
    end
    def create
        @user = User.new(user_params)
        if @user.save
            flash[:notice] = "You have successfully created a user. Please log in."
            redirect_to root_path
        else
            flash[:errors] = @user.errors.full_messages
            redirect_to :back
        end
  end
    def edit
        @user = User.find(current_user)
    end
    def update
        @user = User.find(current_user)
        if @user.update(user_params)
            flash[:notice] = "You have successfully updated your account!"
            redirect_to user_path
        else
            flash[:errors] = @user.errors.full_messages
            redirect_to :back
        end
    end
    def destroy
        User.find(current_user).destroy
        reset_session
        flash[:notice] = "You have successfully deleted the user"
        redirect_to root_path
    end
    private
    def require_user
      if current_user != User.find(params[:id])
        redirect_to "/users/#{session[:user_id]}"
      end
    end
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :location, :state, :password, :password_confirmation)
    end
end