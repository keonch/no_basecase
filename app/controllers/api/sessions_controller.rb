class Api::SessionsController < ApplicationController

  before_action :require_logged_in!, only: [:destroy]
  before_action :require_logged_out!, only: [:create]

  def create
    @user = User.find_by_credentials(
      session_params[:email],
      session_params[:password]
    )
    if @user
      login(@user)
      render 'api/users/session'
    else
      render json: ['The email or password is incorrect.'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/session'
    else
      render json: ['Unauthorized'], status: 404
    end
  end

  private
  def session_params
    params.require(:user).permit(:email, :password)
  end

end
