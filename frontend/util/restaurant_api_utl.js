var ApiAction = require('../actions/restaurant_actions')

export const fetchRestaurants = locId => (
    $.ajax({
        method: 'get',
        url: 'api/locations/' + locId + '/restaurants',
        dataType: 'json',
      success: function (data) {
          debugger
        ApiAction.receiveRestaurants(data);
      },
      errors: function () {
        console.log("Restaurant fetch failed");
      }
    })
);

export const fetchRestaurant = id => (
    $.ajax({
        method: 'get',
        url: `api/restaurants/${id}`
    })
);