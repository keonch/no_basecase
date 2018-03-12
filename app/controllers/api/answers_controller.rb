class Api::AnswersController < ApplicationController
  before_action :require_logged_in!, only: [:create]

  def create
    @answer = Answer.new(answer_params)
    @answer.author_id = current_user.id
    @answer.question_id = params[:question_id]
    if @answer.save
      debugger
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  private
  def answer_params
    params.require(:answer).permit(:body)
  end
end
