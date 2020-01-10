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

// export const searchRestaurants = (cityId,restaurantName) => (
//     $.ajax({
//         method:'get',
//         url:`api/restaurants?city_id=${cityId}&restaurant_name=${restaurantName}`
//         })
// )

export const searchRestaurants = (query) => (
    $.ajax({
        method:'get',
        url:'api/restaurants',
        data: {search:{query}}
    })
)

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

