Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :robots, only: [:index, :update]
    get 'my_robots', to: 'robots#my_robots'
  end

end
