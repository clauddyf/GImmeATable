import { getUser, getUsers } from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});
export const receiveUsers = (users) => ({
    type: RECEIVE_USER,
    users
});

export const fetchUser =(id) => dispatch => {
    getUser(id).then((user) => dispatch(receiveUser(user)));
};

export const getUsers = () => dispatch => (
    getUsers().then((users) => dispatch(receiveUsers(users)))
);