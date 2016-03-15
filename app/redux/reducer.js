import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
// application reducers

export default combineReducers({
  routing: routeReducer,
});
