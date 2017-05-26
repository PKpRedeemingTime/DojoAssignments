Rails.application.routes.draw do
  root "sessions#new"
  get 'sales/:id/create' => 'sales#create'
  get 'purchases/:id/create' => 'purchases#create'
  get 'products/:id/destroy' => 'products#destroy'
  resources :products, only: [:create, :index]
  resources :users, except: [:new]
  resources :sessions, only: [:new, :create, :destroy]
end
