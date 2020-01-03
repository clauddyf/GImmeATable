import React from 'react';
import ReviewIndexContent from './review_index_content';

class ReviewIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchReviews();
    }

    render() {
        if(this.props.reviews.length === 0) {return null;}

        return (
            <div className='rev-index'>
                <h2>Reviews:</h2>
                {
                    this.props.reviews.map(review => (
                        <ReviewIndexContent
                            key={review.id}
                            review={review}
                            fetchUser={this.props.fetchUser}
                            type={this.props.type}
                            users={this.props.users}
                            restaurants={this.props.restaurants}
                            receiveRestaurant={this.props.receiveRestaurant}
                            restaurant={this.props.restaurant}
                            user={this.props.user}
                        />
                    ))
                }
            </div>
        );
    }
}

export default ReviewIndex;