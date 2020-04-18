class Api::AllofemController < ApplicationController

    def index
        @allOfEm = Restaurant.all
        render :index
    end


end