Rails.application.routes.draw do
  root "sessions#new"
  post 'discussions/:id/create' => 'discussions#create'
  get '/events/:id/join' => 'events#join'
  get '/events/:id/cancel' => 'events#cancel'
  delete '/sessions/destroy' => 'sessions#destroy'
  resources :events, except: [:new]
  resources :users, except: [:new]
  resources :sessions, only: [:new, :create]
end
