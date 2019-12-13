json.restaurant do 
    json.partial! '/api/restaurants/restaurant', restaurant: @restaurant
    json.photoUrls @restaurant.photos.map { |file| url_for(file) }
end
