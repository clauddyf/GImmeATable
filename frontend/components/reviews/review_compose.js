import React from 'react';

class ReviewCompose extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                body: '',
                user_id: this.props.currentUser ? this.props.currentUser.id: undefined,
                restaurant_id: this.props.restaurant.id
            };
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.user_id === undefined) {
            windows.alert('Naw bruh')
        } else if (this.state.body === '') {
            window.alert('Hey, you forgot to write a review!')
        } else {
            this.props.composeReview(this.state).then(() => this.setState({body: ''}));
        }
    }

    update(e) {
        this.setState({body: e.target.value});
    }

    render() {
        return (
            <div className='rev-compose'>
                <h2>Write a Review!</h2>
                <form onSubmit = {e => this.handleSubmit(e)}>
                    <textarea className='rev-text'
                        type='text'
                        onChange={e => this.update(e)}
                        placeholder="So what did you think?"
                        value={this.state.body}
                    ></textarea>
                    <input className='rev-com-button' type='submit' value="Submit"></input>
                    <br/>
                </form>
            </div>
        );
    }
}

export default ReviewCompose;