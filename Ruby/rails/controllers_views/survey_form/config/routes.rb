Rails.application.routes.draw do
  root "surveys#index"
  get 'surveys/index'
  get 'surveys/result'
  post 'survey' => "surveys#result_process"
end
