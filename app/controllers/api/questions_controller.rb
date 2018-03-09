class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
  end

  def create
    @question = Question.new(question_params)
    @question.author_id = current_user.id
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    @question = Question.find(params[:id])
    if @question = Question.update(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    question = Question.find_by(params[:id])
    if question && question.author_id == current_user.id
      question.destroy
      render json: {}
    elsif question && question.author_id != current_user.id
      render json: ["You do not own that question"], status: 403
    else
      render json: ["Could not find that question"], status: 404
    end
  end

  private
  def question_params
    params.require(:question).permit(:title, :body)
  end
end
