class Api::RestaurantsController < ApplicationController
    
    def show
        @restaurant = Restaurant.find(params[:id])
        render :show
    end
    
    def index
        
        # location = Location.find(params[:location_id])
        # @restaurants = location.restaurants.includes(:location).order(:id)
        @restaurants = Restaurant.all
        render :index
    end
end
