Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :photos, only: [:index, :create, :show, :update, :destroy] do
      resources :comments, only: [:index, :create]
      resources :tags, only: [:index, :create]
    end
    resources :albums, only: [:index, :create, :show, :update, :destroy]
    resources :comments, only: [:destroy]
    resources :tags, only: [:destroy]
  end

  root "static_pages#root"
end
