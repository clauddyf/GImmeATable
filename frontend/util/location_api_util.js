export const fetchLocations = data => (
    $.ajax({
        method: 'get',
        url: 'api/locations',
        data
    })
);


export const fetchLocation = id => (
    $.ajax({
        method: 'get',
        url: `api/locations/${id}`
    })
);