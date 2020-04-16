import { RECEIVE_REVIEW, RECEIVE_REVIEWS} from '../actions/review_actions';


const ReviewsReducer = (oldState  = {}, action) => {
    // debugger
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_REVIEW:
            newState[action.reviews.id] = action.review;
            return newState;
        case RECEIVE_REVIEWS:
            return action.reviews;
        default: 
            return oldState;
    }
}

export default ReviewsReducer;