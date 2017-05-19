class UsersController < ApplicationController
  def new
  end
  def create
    @user = User.find_by(username: params[:username])
    if @user
      session[:user_id] = @user.id
      redirect_to messages_path
    else
      flash[:errors] = ["Could not find username"]
      redirect_to :back
    end
  end

  def logout
    reset_session
    redirect_to root_path
  end
end