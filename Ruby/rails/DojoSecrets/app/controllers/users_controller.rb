class UsersController < ApplicationController
  def new
  end
  def show
    @user = User.find(params[:id])
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
    @user = User.find(params[:id])
  end
  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      flash[:notice] = "You have successfully updated a user!"
      redirect_to user_path
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to :back
    end
  end
  def destroy
    User.find(params[:id]).destroy
    reset_session
    flash[:notice] = "You have successfully deleted the user"
    redirect_to root_path
  end
  private
    def user_params
      params.require(:user).permit(:email, :name, :password, :password_confirmation)
    end
end