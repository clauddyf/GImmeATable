import React from 'react';
import UserReservationIndexContainer from '../reservation/user_reservation_index_container';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
    }

    componentDidMount() {
        this.props.receiveCurrentUser(this.props.match.params.userId)
    }

    render() {
        if(!this.props.user) return null;

        let user = this.props.user;

        return (
            <div clasName='middleit'>
                <div className='user-profile'>
                    <div className='user-detail'>
                        <span className= 'rest-prof-pos'>
                            <h2>{user.first_name}</h2>
                        </span>
                    </div>
                </div>
                <UserReservationIndexContainer user={user}/>
            </div>
        )
    }


}

export default Profile