class Api::LocationsController < ApplicationController
   
    def show
        @location = Location.find(params[:id])
        render :show
    end
    
    def index
        @locations = Location.all
        render :index
    end
    

end
