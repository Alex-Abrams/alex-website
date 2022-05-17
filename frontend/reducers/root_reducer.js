import { combineReducers } fromm 'redux';
import userReducer from './useer_reducer';

export default combineReducers({
  user: userReducer,
});
