Rails.application.routes.draw do
  get 'products/first_product'

  get 'products/second_product'

  devise_for :users
  root "welcome#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
