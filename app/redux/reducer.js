import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// application reducers

export default combineReducers({
  routing: routerReducer,
});
