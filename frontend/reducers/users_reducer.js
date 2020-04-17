import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newstate = Object.assign({}, state);
    debugger
    switch(action.type) {
        case RECEIVE_USER:
            newstate[action.user.id] = action.user;
            return newstate;
        case RECEIVE_USERS:
            return action.users;
        default:
            return state;
    }
};

export default usersReducer