json.restaurant do 
    json.partial! '/api/restaurants/restaurant', restaurant: @restaurant
    json.photourl url_for (restaurant.photo)
end
