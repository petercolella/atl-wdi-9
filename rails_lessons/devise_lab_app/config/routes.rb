Rails.application.routes.draw do
  devise_for :users
  # get 'static_pages/home'

  # get 'static_pages/welcome'

  # get 'static_pages/support'

  # get 'static_pages/configure'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#home"

  get 'home' => 'static_pages#home'
  get 'welcome' => 'static_pages#welcome'
  get 'support' => 'static_pages#support'
  get 'configure' => 'static_pages#configure'
end
