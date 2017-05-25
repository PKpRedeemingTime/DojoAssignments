class EventsController < ApplicationController
  before_action :require_user, except: [:index, :create, :show, :join, :cancel]
  def index
    @user = User.find(current_user)
    @events = Event.all
    @count = Event.where(state: current_user.state).count
    @count2 = Event.except(state: current_user.state).count
    @attendees = Attendee.all
  end
  def create
    event = Event.new(event_params)
    if event.save
      flash[:notice] = "You have successfully created an event!"
        redirect_to events_path
    else
        flash[:errors] = event.errors.full_messages
        redirect_to events_path
    end
  end
  def edit
    @event = Event.find(params[:id])
  end
  def show
    @event = Event.find(params[:id])
    @discussions = Discussion.where(event_id: @event.id)
    @count = Discussion.where(event_id: @event.id).count
    @attendees = Attendee.where(event_id: @event.id)
    @attendee_count = Attendee.where(event_id: @event.id).count
  end
  def update
    @event = Event.find(params[:id])
      if @event.update(event_params)
          flash[:notice] = "You have successfully updated your event!"
          redirect_to events_path
      else
          flash[:errors] = @event.errors.full_messages
          redirect_to :back
      end
  end
  def join
    event = Event.find(params[:id])
    Attendee.create(user: current_user, event: event)
    redirect_to :back
  end
  def cancel
    event = Event.find(params[:id])
    attendee = Attendee.where(user_id: current_user.id).where(event_id: event.id)
    Attendee.destroy(attendee)
    redirect_to :back
  end
  def destroy
    Event.find(params[:id]).destroy
    flash[:notice] = "You have successfully deleted this event."
    redirect_to events_path
  end
  private
    def require_user
      event = Event.find(params[:id])
      if current_user != event.user
        flash[:notice] = "You may only edit events for which you are the host."
        redirect_to :back
      end
    end
    def event_params
      params.require(:event).permit(:name, :date, :location, :state).merge(user: current_user)
    end
end