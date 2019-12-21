export const getUser = (id) => (
    $.ajax({
        url: `/api/user/${id}`,
        method: 'get'
    })
);