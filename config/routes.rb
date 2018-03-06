Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :update]
  end

  root to: 'static_pages#root'
end
