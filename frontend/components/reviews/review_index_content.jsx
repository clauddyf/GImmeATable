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

// && this.props.review.restaurant_id === parseInt(this.props.restaurant)
// && this.props.review.user_id === parseInt(this.props.user)

// heroku config:set RAILS_MASTER_KEY=<your-master-key-here></your-master-key-here>
// heroku config:set RAILS_MASTER_KEY=9a00f681958e67725dfa57f813519bd0


// 9a00f681958e67725dfa57f813519bd0
// knR0PRtqTwAzKGdTQvW5f/cDbqdS08wYgDzUIwM7igO/ys4ktphb7AcFE4CuJuVDTv7qdvmCHlmMyOJhkJesOGomTfhbPPKXbWsFhMMM6M9tYIALmIR69kI6+jSI/lc8JKvEQp5C65SiLGbE4Hiynmm9sjqBLoF2qJCN7/EwCeQrcH/L4fTj4mlKtjFD2vRPEW/NrP1rftNvFas6zcLYPAhMta25XS68lclRHcVA0Xn70b5HHntgywFG6uCXUqq3scb8U7xN7xcjsu8N2cOks/TOdcjnyTgEmcIiZ9qEIeeVqYTsQkv05EzI0bP8XOPAE+0NpuZ0sFsYdrN3f6LL4D+npXQvRUEFcE4A4EI4zst+tVbU6ZCKphuaSduVDJOUWiv6t5xLAqDLRYt/Lw3e+fH8prGvIrjkKI0tH+mdHCZh0SROTu5lGx77Rac4sCVpWxEh5MMYhtGaav+Ju2xGwUY34awPknEwb2wlPxH8MJF/0xDtdztl8cNGM9a1NIGsWPwSztwcq3n4qB6uKtDcY07wBpohfurWYaswmXExNcPe9fNGTadzr+gvmn/lglC39gMqwD2BTGMU2vS5+/28ziKOmWvwMJ2fIf0=--eeRdLAdfRzED+Rcr--IBFzHAKK9HWnHxRUZKwpNQ==

// aws:
//   access_key_id: "AKIA5HDQ6UHTJRNTOQ3T"
//   secret_access_key: "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"
//   region: "us-west-1"
//   dev:
//     bucket: "gimmeatable-dev"
//   prod:
//     bucket: "gimmeatable-pro"

// # Used as the base secret for all MessageVerifiers in Rails, including the one protecting cookies.
// secret_key_base: 82d1dceedbca296bb7c6825e41499e7af74e566e8e83c0aee038196a8fa1b2d6e94e4be4f43bdf342f3ddb8e19c7264599c7533340aea3ca37b3b7fd7ce78126
