json.array! @results do |result|
    json.rest_id result.restaurant_id
    json.date result.date
    json.time result.time_slot
end