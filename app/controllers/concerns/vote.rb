module Vote
  extend ActiveSupport::Concern

  def downvote
    vote(-1)
  end

  def upvote
    vote(1)
  end

  def vote(direction)
    entity = params[:entity].titleize.constantize.find(params[:entity_id])
    @user_vote = entity.user_votes.find_or_initialize_by(user: current_user)

    if entity.class == Question
      @question = entity
    elsif entity.class == Answer
      @answer = entity
    end

    if @user_vote.update(value: direction)
      render :vote
    else
      render @user_vote.errors.full_messages, status: 422
    end
  end
end
