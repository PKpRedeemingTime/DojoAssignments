class RpgController < ApplicationController
  def index
    session[:gold] ||= 0
    session[:activities] ||= []
    @gold = session[:gold]
    @activities = session[:activities]
  end
  def gold_process
    if params[:setting] == "farm" 
      gold = rand(10..20)
    elsif params[:setting] == "cave"
      gold = rand(5..10)
    elsif params[:setting] == "house"
      gold = rand(2..5)
    elsif params[:setting] == "casino"
      gold = rand(-50..50)
    end
    if gold > 0
      session['activities'] << "Earned #{gold} golds at the #{params[:setting]}!"
    else
      session['activities'] << "Lost #{gold} golds at the #{params[:setting]}!"
    end
    session[:gold] += gold
    redirect_to :root
  end
end
