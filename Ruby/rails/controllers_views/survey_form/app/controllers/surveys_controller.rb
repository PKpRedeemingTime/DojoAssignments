class SurveysController < ApplicationController
  def index
    session[:views] ||= 0
  end
  def result_process
    session[:views] += 1
    session[:result] = params[:survey]
    flash[:success] = "Thanks for submitting this form! You have submitted it #{session[:views]} time(s) now."
    redirect_to "/surveys/result"
  end
  def result
    @result = session[:result]
  end
end
