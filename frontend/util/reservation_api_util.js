
export const setTempReservation = (data,cb) => (
    $.ajax({
        method: 'post',
        url: "api/reservations/temp_set",
        data: {reservation: data}
    })
)


export const getTempReservation = () => (
    $.ajax({
        method: 'get',
        url: 'api/reservations/temp_get'
    })
)