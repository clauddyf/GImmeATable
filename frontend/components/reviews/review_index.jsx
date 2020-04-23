import React from 'react';
import ReviewIndexContent from './review_index_content';

class ReviewIndex extends React.Component {
    componentDidMount() {
        this.props.fetchReviews();
        this.props.fetchUsers();
        this.props.fetchRestaurants();
    }

    componentWillMount(){
        this.props.fetchReviews()
    }

    render() {
        debugger
        let reviews = Object.keys(this.props.reviews).length > 0 ? this.props.reviews : []
        if(reviews.length === 0) {return null;}
        return (
            <div className='rev-index'>
                <h2>Reviews:</h2>
                {
                    reviews.map(review => (
                        <ReviewIndexContent
                            key={review.id}
                            review={review}
                            fetchUser={this.props.fetchUser}
                            fetchUsers={this.props.fetchUsers}
                            type={this.props.type}
                            users={this.props.users}
                            restaurants={this.props.restaurants}
                            fetchRestaurant={this.props.fetchRestaurant}
                            fetchRestaurants={this.props.fetchRestaurants}
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