var ApiAction = require('../actions/restaurant_actions')
// debugger
export const fetchRestaurants = locId => (
    $.ajax({
        method: 'get',
        url: 'api/locations/' + locId + '/restaurants',
        data: locId,
              success: function (dat) {
                //   debugger
                ApiAction.receiveRestaurants(dat);
              },
    })
);

export const fetchRestaurant = id => (
    $.ajax({
        method: 'get',
        url: `api/restaurants/${id}`
    })
);
// var ApiAction = require('../actions/restaurant_actions')
// dataType: 'json',
//       errors: function () {
//         console.log("Restaurant fetch failed");
//       }
//     })

// @restaurants.each do |restaurant| 
//     json.set! restaurant.id do 
//         json.partial! 'restaurant', restaurant: restaurant
//         json.photoUrls restaurant.photos.map { |file| url_for(file) }
//     end
// end

// json.array! @restaurants, partial: 'api/restaurants/restaurant', as: :restaurant

