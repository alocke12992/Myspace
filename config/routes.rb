Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :users, only: [:index, :show, :update] 
    get 'my_friends', to: 'users#my_friends'
    get 'take_four', to: 'users#take_four'
    resources :posts 
    resources :bios
    resources :comments

  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
