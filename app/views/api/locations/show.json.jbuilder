json.location do 
    json.partial! '/api/locations/location', location: @location
    json.photoUrls @location.photos.map { |file| url_for(file) }
end
