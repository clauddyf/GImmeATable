Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # namespace :api, defaults: {format: :json} do 
  #   resources :users, only: [:create]
  #   resource :session, only: [:create, :destroy, :show]
  #   resources :restaurants, only: [:index, :show]
  #   resources :locations, only: [:index,:show]
  # end

  namespace :api, defaults: {format: :json} do 
    resources :locations, only: [:index] do
      resources :restaurants, only: :index
    end
    resources :restaurants, only: :show do
      resources :reservations, only: :index
    end
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :update, :show]
    resources :reservations, only: [:create, :destroy] do 
      collection do 
        get :temp_get
        post :temp_set
      end
    end
    resources :locations, only: :show
    resources :restaurants, only: :show
  end

  root "static_pages#root"
end
