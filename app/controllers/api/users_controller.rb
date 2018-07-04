class Api::UsersController < ApplicationController
  before_action :require_logged_out!, only: [:create]

  def create
    @user = User.new(user_params)
    @user.name == nil
    @user.name = User.generate_name
    if @user.save
      login(@user)
      render 'api/users/session'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
