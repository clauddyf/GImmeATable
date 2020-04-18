class Api::RestaurantsController < ApplicationController
    
    def show
        @restaurant = Restaurant.find(params[:id])
        render :show
    end
    
    def index
        location = Location.find(params[:location_id])
        @allOfEm = Restaurant.all
        @restaurants = location.restaurants.includes(:location).order(:id)
        # @restaurants = Restaurant.find_by({location: :location_id})
        # @restaurants = Restaurant.all
        render :index
    end

    private 

    # def restaurant_params
    #     params.require(:restaurant).permit(:location)
    # end
end
