json.extract! restaurant, :reviews



json.restaurant do 
    json.id restaurant.id
    json.description restaurant.description
    json.city restaurant.location
    json.name  restaurant.name
    json.dresscode restaurant.dresscode
    json.dining_style restaurant.dining_style
    json.cuisine_type restaurant.cuisine_type
    json.happy_hour restaurant.happy_hour
    json.num_of_views restaurant.num_of_views
    json.hours_op  restaurant.hours_op
    json.address restaurant.address
    json.neighborhood restaurant.neighborhood
    json.phone_num restaurant.phone_num
    json.website restaurant.website
    json.pricing restaurant.pricing
    json.num_stars restaurant.num_stars
    json.open restaurant.open
    json.close restaurant.close
end
