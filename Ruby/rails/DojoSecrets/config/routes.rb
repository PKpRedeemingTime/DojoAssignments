Rails.application.routes.draw do 
  root "sessions#new"
  resources :sessions, only: [:new, :create, :destroy]
  resources :secrets, only: [:index, :create, :destroy]
  resources :users
end
