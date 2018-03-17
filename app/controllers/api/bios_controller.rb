class Api::BiosController < ApplicationController
  before_action :set_bio, only: [:show, :update, :destroy]

  def index
    render json: Bio.order(created_at: :desc)
  end

  def show
    render json: @bio
  end

  def update
    if @bio.update(bio_params)
      render json: @bio
    else 
      render json: @bio.errors, status: 422 
    end 
  end

  def create
    bio = Bio.new(bio_params)
  
    if bio.save
      render json: bio 
    else 
      render json: bio.errors, status: 422
    end 
  end

  def destroy
    @bio.destroy
  end

  private 
    def set_bio 
      @bio = current_user.bio.find(params[:id])
    end 
    
    def bio_params 
      params.require(:bio).permit(:bio, :user_id) 
    end 
end