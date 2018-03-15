class Api::PostsController < ApplicationController

  before_action :set, only: [:show, :update, :create, :destroy]

  def index
    render json: Post.all 
  end

  def show
    render json: @post 
  end

  def update
    if @post.update(post_params)
      render json: @post
    else 
      render json: @post.errors, status: 422 
    end 
  end

  def create
    post = Post.new(post_params)

    if post
      render json: post 
    else 
      render json: post.erros, status: 422
    end 
  end

  def destroy
    @post.destroy
  end

  private 
    def set_post 
      @post = Post.find(params[:id])
    end 
    
    def post_params 
      params.require(:post).permit(:username, :body)
    end 
end
