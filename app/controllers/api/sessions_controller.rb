class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Invalid email/password combination"], status: 401
        end
    end

    def show 
        if current_user
            @user = current_user
            @reservations = @user.reservations.includes(:restaurant).order('date').order('time_id')
            render "api/users/index"
        else
            render json: {}
        end
    end

    def destroy 
        @user =  current_user
        if @user 
            logout
            render "api/users/show"
        else
            render json: ["Nob0dy signed in"], status: 404
        end
    end
end
