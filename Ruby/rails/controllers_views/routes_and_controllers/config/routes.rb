Rails.application.routes.draw do
  root "greetings#index"
  get "hello" => "greetings#hello"
  get "say/hello(/:name)" => "greetings#say"
  get "times" => "greetings#times"
  get "times/restart" => "greetings#restart"
end
