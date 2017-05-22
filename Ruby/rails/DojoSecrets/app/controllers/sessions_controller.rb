class SessionsController < ApplicationController
  def new
  end
  def create
    @user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to "/users/#{@user.id}"
    else 
      flash[:errors] = ["Invalid Combination"]
      redirect_to root_path
    end
  end
  def destroy
    reset_session
    redirect_to root_path
  end
end
