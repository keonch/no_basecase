class Api::QuestionsController < ApplicationController
  include ActionView::Helpers::TextHelper
  before_action :require_logged_in!, only: [:create, :update, :destroy]

  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
    if @question
      render :show
    else
      render json: ['Not Found'], status: 404
    end
  end

  def create
    @question = Question.new(question_params)
    @question.author_id = current_user.id
    if @question.save
      render json: @question.id
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    question = Question.find(params[:id])
    if question && question.author_id == current_user.id
      question.destroy
      render json: question.id
    elsif question && question.author_id != current_user.id
      render json: ['Forbidden'], status: 403
    else
      render json: ['Not Found'], status: 404
    end
  end

  def update
    @question = Question.find(params[:id])
    if @question
      if @question.author_id == current_user.id
        if @question.update(question_params)
          render json: @question.id
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
  def question_params
    params.require(:question).permit(:title, :body, :trunc_body)
  end

end
