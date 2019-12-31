class Api::SearchController < ApplicationController

    def index 
        @restaurants = Restaurant.search_results(search_params[:query])
        render :index
    end
    debugger
    def search_params
        params.require(:search).permit(:query)
    end
end
