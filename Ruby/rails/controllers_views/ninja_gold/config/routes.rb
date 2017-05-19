Rails.application.routes.draw do
  root "rpg#index"
  get 'rpg/index'
  post 'rpg/gold_process'
end
