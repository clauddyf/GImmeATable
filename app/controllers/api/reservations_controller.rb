class Api::ReservationsController < ApplicationController

    def index
        @results = Reservation.search_results(params[:filters])
    end

    def create
        attrs = {
            user_id: current_user.id,
            restaurant_id: reservations_params[:rest_id],
            date: reservations_params[:date],
            time_id: params[:reservation][:time][:id]
        }
        res = Reservation.new(attrs)
        if res.save
            render json: res.to_json.target!
        else
            render json: res.errors
        end
    end

    def destroy
        reservation = Reservation.find(params[:id])
        reservation.destroy!

        @user = current_user
        @reservations =@user.reservations.includes(:restaurant).order('date').order('time_id')
        render "api/users/index"
    end

    def temp_set
        attrs = {
            user_id: User.first.id,
            restaurant_id: reservations_params[:rest_id],
            date: reservations_params[:date],
            time_id: params[:reservation][:time][:id]
        }
        res = Reservation.new(attrs)
        session[:reservation] = res.to_json.target!
        render json: session[:reservation]
    end

    def temp_get
        render json: session[:reservation]
    end


    
    private

    def reservations_params
        params.require(:reservation).permit(:date,:rest_id)
    end
end
