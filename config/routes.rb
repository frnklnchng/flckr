Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :photos, only: [:index, :create, :show, :update, :destroy]
  end

  root "static_pages#root"
end
