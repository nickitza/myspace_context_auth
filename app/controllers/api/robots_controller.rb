class Api::RobotsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_robot(current_user.liked_robots)
  end

  def update
    current_user.liked_robots<< params[:id].to_i  
    current_user.save
  end
end
