Rails.application.routes.draw do
  root "users#index"
  get 'users/index'
  get 'users/new'
  get 'users/:id' => "users#show"
  post 'users' => "users#create"
  get 'users/:id/edit' => "users#edit"
  get 'users/total'
end
