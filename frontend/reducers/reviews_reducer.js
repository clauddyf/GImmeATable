import { RECEIVE_REVIEW, RECEIVE_REVIEWS} from '../actions/review_actions';


const ReviewsReducer = (oldState  = {}, action) => {
    // debugger
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_REVIEW:
            debugger
            let returnObj = {}
            if (action.reviews){
                return action.reviews
            } else {
                returnObj = {1 : action.review}
                return returnObj;
            }
            // newState[action.review.id] = action.review;
            // return newState;
        case RECEIVE_REVIEWS:
            debugger
            return action.reviews;
        default: 
            return oldState;
    }
}

export default ReviewsReducer;