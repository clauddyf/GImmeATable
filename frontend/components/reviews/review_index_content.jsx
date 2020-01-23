import React from 'react';

class ReviewIndexContent extends React.Component {
     componentWillMount() {
         if (this.props.type == 'restaurant') {
             this.props.fetchUser(this.props.review.user_id);
            //  this.props.fetchUsers();
         } else {
             this.props.fetchRestaurant(this.props.review.restaurant_id);
         }
     }

     render() {
         if (Object.keys(this.props.users).length === 0) {
             return null;
         }
         if (Object.keys(this.props.restaurants).length === 0) {
             return null;
         }
     let userList = this.props.users
     let reviewerId = this.props.review.user_id
     let reviewer = userList[reviewerId] ? userList[reviewerId].first_name : '';

     let restaurantList = this.props.restaurants;
     let restaurantId = this.props.review.restaurant_id
     let reviewedRestaurant = restaurantList[restaurantId] ? restaurantList[restaurantId].name : '';

     let content;
         debugger
     if(this.props.type === 'restaurant' && this.props.review.restaurant_id === parseInt(this.props.restaurant)){
        content = (
            <div className = 'rev-ind-cont'>
                <h3>Review by {reviewer}:</h3>
                <hr/>
                <br/>
                {this.props.review.body}
            </div>
        );
     } else if (this.props.type === 'user' && this.props.review.user_id === parseInt(this.props.user)) {
         content = (
             <div className='rev-ind-cont'>
                 <h3>Review for {reviewedRestaurant}:</h3>
                 <hr/>
                 <br/>
                 {this.props.review.body}
             </div>
         );
     } else {
         content = <div></div>
     }
     return (
         <div>
             {content}
         </div>
     );
    }
}

export default ReviewIndexContent


