class Api::QuestionsController < ApplicationController
  before_action :require_logged_in!, only: [:create, :update, :destroy]

  def index
    @questions = Question.all.includes(:author, :answers)
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
    question = Question.find(params[:id])
    if question && question.author_id == current_user.id
      question.destroy
      render json: question.id
    elsif question && question.author_id != current_user.id
      render json: ["Forbidden"], status: 403
    else
      render json: ["Not Found"], status: 404
    end
  end

  def search
    searchText = params[:searchText]
    @questions = Question.where('title ~* ?', searchText).or(Question.where('body ~* ?', searchText))
    render 'api/questions/index'
  end

  def top
    @questions = Question.all.includes(:author, :answers)
    list = Hash.new(0)
    @questions.each do |question|
      list[question.id] = question.votes
    end
    sorted = list.sort_by{ |k, v| v }.reverse
    @sorted = sorted.map do |pair|
      pair.first
    end
  end

  private
  def question_params
    params.require(:question).permit(:title, :body)
  end

  include Vote
end
