class Api::UsersController < ApplicationController
 before_action :authenticate_user!
  def index
    render json: User.random_user(current_user.friends)
  end

  def show
    @user = User.find([:id])
    render json: @user 
  end

  def update
    current_user.friends << params[:id].to_i 
    currentUser.save 
  end 

end
