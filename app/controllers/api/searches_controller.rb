class Api::SearchesController < ApplicationController
    def index 
        @restaurants = Restaurant.search_results('query')
        render :index
    end
    
    # def search_params
    #     params.require(:search).permit(:query)
    # end
end
