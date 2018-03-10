class Api::SessionsController < ApplicationController
  before_action :require_logged_in!, only: [:destroy]
  before_action :require_logged_out!, only: [:create]

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ['The email or password is incorrect.'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
      render json: ['Unauthorized'], status: 404
    end
  end
end
