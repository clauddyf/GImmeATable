json.array! @locations do |loca|
    json.id loca.id
    json.name loca.location
    json.count loca.count
end