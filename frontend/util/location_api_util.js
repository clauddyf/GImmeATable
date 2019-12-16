// import { receiveRestaurant } from '../actions/restaurant_actions';

export const fetchLocations = data => (
    $.ajax({
        method: 'get',
        url: 'api/locations',
        data,   
    })
);
        
        // success: function (data) {
        //     ApiAction.receiveRestaurant(data);
        //   },
        //   errors: function () {
        //     console.log("City fetch failed");
        //   }
        // })

export const fetchLocation = id => (
    $.ajax({
        method: 'get',
        url: `api/locations/${id}`
    })
);