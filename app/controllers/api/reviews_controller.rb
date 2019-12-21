class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
    end
    
    def create
        @review = Review.new(rev_params)
        if current_user
            @review.user_id = current_user.id 
            @review.save
            render json: @review
        else
            render json: @review.errors.full_messages, status:422
        end
    end

    private

    def rev_params
        params.require(:review).permit(:body, :user_id, :restaurant_id)
    end

end
