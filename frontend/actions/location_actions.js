import * as APIUtil from '../util/location_api_utl';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

export const receiveLocations = locations => ({
    type: RECEIVE_LOCATIONS,
    locations,
});

export const receiveLocation = ({ location }) => ({
    type: RECEIVE_LOCATION,
    location
});

export const fetchLocations = () => dispatch => (
    APIUtil.fetchLocations().then(locations => dispatch(receiveLocations(locations)))
)
export const fetchLocation = locId => dispatch => (
    APIUtil.fetchLocation(locId).then(locId => dispatch(receiveLocation(locId)))