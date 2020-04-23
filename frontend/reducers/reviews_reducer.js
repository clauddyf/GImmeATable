import { RECEIVE_REVIEW, RECEIVE_REVIEWS} from '../actions/review_actions';


const ReviewsReducer = (oldState  = {}, action) => {
    // debugger
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_REVIEW:
            debugger
            // newState[action.review.id] = action.review;
            // return newState;
            return action.reviews;
        case RECEIVE_REVIEWS:
            debugger
            return action.reviews;
        default: 
            return oldState;
    }
}

export default ReviewsReducer;