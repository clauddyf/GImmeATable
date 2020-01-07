class Api::ReservationsController < ApplicationController

    def index
        @reservations = Reservation.find(params[:user_id])
    end

    def create
        @reservation = Reservation.new(reservations_params)
        if current_user
            @reservation.user_id = current_user.id
            @reservation.save
            render json: @reservation
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end
    
    def destroy
        reservation = Reservation.find(params[:id])
        reservation.destroy!
        
        @user = current_user
        @reservations =@user.reservations.includes(:restaurant).order('date').order('time_id')
        render "api/users/index"
    end
    
    
    
    private
    
    def reservations_params
        params.require(:reservation).permit(:date,:restaurant_id,:user_id,:time_id,:head_count)
    end
end


# def temp_set
#     attrs = {
#         user_id: User.first.id,
#         restaurant_id: reservations_params[:rest_id],
#         date: reservations_params[:date],
#         time_id: params[:reservation][:time][:id]
#     }
#     res = Reservation.new(attrs)
#     session[:reservation] = res.to_json.target!
#     render json: session[:reservation]
# end

# def temp_get
#     render json: session[:reservation]
# end
# attrs = {
#     user_id: current_user.id,
#     restaurant_id: reservations_params[:rest_id],
#     date: reservations_params[:date],
#     time_id: params[:reservation][:time][:id]
# }