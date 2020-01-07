export const getUser = (id) => (
    $.ajax({
        url: `/api/users/${id}`,
        method: 'get'
    })
);

export const getUsers = () => {
    return (
        $.ajax ({
            method: 'get',
            url: 'api/users',
        })
    );
};