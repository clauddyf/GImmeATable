import { connect } from 'react-redux';
import { fetchLocation } from '../../actions/location_actions';
import LocationShow from '../location/location_show';


const mSTP = (state, ownProps) => ({
    location: state.entities.locations[ownProps.match.params.locId]
})

const mDTP = dispatch => ({
    fetchLocation: (location) => dispatch(fetchLocation(location))
})

export default connect(mSTP,mDTP)(LocationShow)

