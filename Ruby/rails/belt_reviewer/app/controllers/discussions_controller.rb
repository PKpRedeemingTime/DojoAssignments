class DiscussionsController < ApplicationController
  def create
    discussion = Discussion.new(discussion_params)
    if discussion.save
      redirect_to :back
    else
        flash[:errors] = discussion.errors.full_messages
        redirect_to :back
    end
  end
  private
    def discussion_params
      event = Event.find(params[:id])
      params.require(:discussion).permit(:content).merge(user: current_user).merge(event: event)
    end
end
