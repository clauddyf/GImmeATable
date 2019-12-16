@locations.each do |location| 
    json.set! location.id do 
        json.partial! 'location', location: location
        json.photoUrls location.photos.map { |file| url_for(file) }
    end
end