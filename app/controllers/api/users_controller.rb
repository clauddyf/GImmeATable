class Api::UsersController < ApplicationController

    before_action :require_logged_in, only: [:show, :update]
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "/api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(current_user.id)
        @reservations = @user.reservations.includes(:restaurant).order('date').order('time_id')
        render :index
    end

    def update
        @user = current_user
        @user.udpate(user_params)
        @reservations = @user.reservations.includes(:restaurant).order('date').order('time_id')
        render :index
    end

    private

    def user_params
        params.require(:user).permit(:email,:password,:first_name,:last_name,:city)
    end
end
