Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create, :update]

    resources :questions, only: [:create, :update, :destroy, :index, :show] do
      resources :answers, only: [:create, :destroy] do
      end
    end

    resource :session, only: [:create, :destroy]

  end

  root to: 'static_pages#root'

  get '/api/search', to: 'api/questions#search'

  patch '/api/question/upvote/:entity_id', to: 'api/questions#upvote'
  patch '/api/question/downvote/:entity_id', to: 'api/questions#downvote'
  patch '/api/answer/upvote/:entity_id', to: 'api/answers#upvote'
  patch '/api/answer/downvote/:entity_id', to: 'api/answers#downvote'
  get '/api/frontpage', to: 'api/questions#top', defaults: { format: :json }

end
