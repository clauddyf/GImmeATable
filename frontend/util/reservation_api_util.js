
export const composeReservation = (reservation) => (
    $.ajax({
        method: 'post',
        url: "api/reservations/",
        data: {reservation}
    })
)
