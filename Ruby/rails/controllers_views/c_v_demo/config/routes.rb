Rails.application.routes.draw do
  get 'products/index'
  post "products" => 'products#create'
  get 'products/new'

  root 'products#index'

  resources :products
end
