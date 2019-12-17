import { connect } from 'react-redux';
import { fetchLocation } from '../../actions/location_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions'
import LocationContent from '../location/location_content'
import {withRouter} from 'react-router-dom'


const mSTP = (state, ownProps) => ({
    // location: state.entities.locations[ownProps.match.params.locId],
    // restaurants: state.entities.restaurants[ownProps.match.params.id]
    restaurants: state.entities.restaurants

})

const mDTP = dispatch => ({
    // fetchLocation: (location) => dispatch(fetchLocation(location)),
    fetchRestaurants: (locId) => dispatch(fetchRestaurants(locId))
})

export default withRouter(connect(mSTP,mDTP)(LocationContent))

