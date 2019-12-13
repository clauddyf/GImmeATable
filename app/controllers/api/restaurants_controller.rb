class Api::RestaurantsController < ApplicationController

    def show
        @restaurant = Restaurant.find(params[:id])
        render :show
    end

    def index
        @restaurants = Restaurant.all
        render :index
    end
end
