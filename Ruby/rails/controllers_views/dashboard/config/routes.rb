Rails.application.routes.draw do
  root "dojos#index"
  resources :dojos do
    resources :students
  end
end
