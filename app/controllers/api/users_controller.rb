class Api::UsersController < ApplicationController
 before_action :authenticate_user!
  def index
    render json: User.random_user(current_user.friends)
  end

   def take_four 
    users = User.all 
    render json: users.sample(4)
   end 

  def count_friends
    friends = current_user.friends
    render json: friends.count
  end 

  def my_friends 
    render json: User.liked(current_user.friends)
  end 

  def show
    @user = User.find([:id])
    render json: @user 
  end

  def update
    current_user.friends << params[:id].to_i 
    current_user.save 
  end 

end
