class SessionsController < ApplicationController
  skip_before_action :require_login, only: [:new, :create]
  def new
  end
  def create
    @user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to "/users/#{@user.id}"
    else
      flash[:errors] = ["Invalid email/password combination"]
      redirect_to root_path
    end
  end
  def destroy
    reset_session
    redirect_to root_path
  end
end