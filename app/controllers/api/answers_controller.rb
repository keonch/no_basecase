class Api::AnswersController < ApplicationController

  before_action :require_logged_in!, only: [
    :create,
    :upvote,
    :downvote,
    :upvote,
    :downvote
  ]

  def show
    @answer = Answer.find(params[:id])
    if @answer
      render :show
    else
      render json: ['Not Found'], status: 404
    end
  end

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
      render json: ['Forbidden'], status: 403
    else
      render json: ['Not Found'], status: 404
    end
  end

  def update
    @answer = Answer.find(params[:id])
    if @answer
      if @answer.author_id == current_user.id
        if @answer.update(answer_params)
          render json: @answer.question_id
        else
          render json: @answer.errors.full_messages, status: 422
        end
      else
        render json: ['Forbidden'], status: 403
      end
    else
      render json: ['Not Found'], status: 404
    end
  end

  def upvote
    vote(1)
  end

  def downvote
    vote(-1)
  end

  private
  def answer_params
    params.require(:answer).permit(:body)
  end

  def vote(increment)
    @answer = Answer.find(params[:id])
    @vote = @answer.votes.find_or_initialize_by(user: current_user)
    new_value = @vote.get_value(increment)
    if !new_value
      render json: ['Cannot vote again'], status: 403
    elsif @vote.update(value: new_value)
      render :vote
    else
      render @vote.errors.full_messages, status: 422
    end
  end

end
