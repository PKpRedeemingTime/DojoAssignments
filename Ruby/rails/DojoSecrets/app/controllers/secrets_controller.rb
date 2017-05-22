class SecretsController < ApplicationController
  def index
    @secrets = Secret.all
  end
  def create
    secret = Secret.new(secret_params)
    if secret.save
      flash[:notice] = "You have successfully created a secret."
      redirect_to :back
    else
      flash[:errors] = secret.errors.full_messages
      redirect_to :back
    end
  end
  def destroy
    Secret.find(params[:id]).destroy
    redirect_to :back
  end
  private
    def secret_params
      params.require(:secret).permit(:content).merge(user: current_user)
    end
end
