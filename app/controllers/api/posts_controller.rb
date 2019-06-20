class Api::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # /api/users/1/posts/
  def index
    # User.find(params[:user_id]).posts
    render json: current_user.posts
  end

  # /api/users/1/posts/1
  def show
    render json: @post
  end

  def create
    post = current_user.posts.new(post_params)
    if post.save
      render json: post
    else 
      render json: {}
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: {}
    end
  end

  def destroy
    @post.destroy
  end

  private 
  def set_post
    @post = current_user.posts.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body)
  end

end
