class Api::CommentsController < ApplicationController
  before_action :set_comment, only [:show, :update, :destroy]
  def index
    render json: Comments.all 
  end

  def update
  end

  def destroy
  end

  def create
  end

  private 

  def set_comment 
    @comment = current_user.comments.find(params[:id])
  end 
end
