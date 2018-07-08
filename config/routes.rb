Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :questions, only: [:index, :show, :create, :destroy, :update] do
      resources :answers, only: [:show, :create, :destroy, :update] do
        member do
          post 'upvote'
          post 'downvote'
        end
      end
      member do
        post 'upvote'
        post 'downvote'
      end
    end
  end
end
