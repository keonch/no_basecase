class Api::AnswersController < ApplicationController
  before_action :require_logged_in!, only: [:create, :upvote, :downvote]

  def create
    @answer = Answer.new(answer_params)
    @answer.author_id = current_user.id
    @answer.question_id = params[:question_id]
    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def destroy
    answer = Answer.find(params[:id])
    if answer && answer.author_id == current_user.id
      answer.destroy
      render json: answer.id
    elsif answer && answer.author_id != current_user.id
      render json: ["Forbidden"], status: 403
    else
      render json: ["Not Found"], status: 404
    end
  end

  def update
    @question = Question.find(params[:id])
    if @question
      if @question.author_id == current_user.id
        if @question.update(question_params)
          render :show
        else
          render json: @question.errors.full_messages, status: 422
        end
      else
        render json: ['Forbidden'], status: 403
      end
    else
      render json: ['Not Found'], status: 404
    end
  end

  private
  def answer_params
    params.require(:answer).permit(:body)
  end

end
