Rails.application.routes.draw do
  root "sessions#new"
  resources :users, except: [:new]
  resources :sessions, only: [:new, :create, :destroy]
end
