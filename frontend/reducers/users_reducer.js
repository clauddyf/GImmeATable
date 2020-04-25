import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newstate = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_USER:
            debugger
            // newstate[action.user.id] = action.user;
            // return newstate;
            return action.user
        case RECEIVE_USERS:
            return action.users;
        default:
            return state;
    }
};

export default usersReducer