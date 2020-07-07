import {combineReducers} from 'redux';
import {ActionTypes} from '../actionTypes';

const usersReducer = (state = null, {type, payload}) => {
  switch (type) {
    case ActionTypes.USERS_GET_SUCCESS:
      return payload

    default:
      return state;
  }
};

const loadingReducer = (state = false, {type, payload}) => {
  switch (type) {
    case ActionTypes.USERS_GET_REQUEST:
      return true;

    case ActionTypes.USERS_GET_SUCCESS:
    case ActionTypes.USERS_GET_ERROR:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, {type, payload}) => {
  switch (type) {
    case ActionTypes.USERS_GET_ERROR:
      return payload.error;

    case ActionTypes.USERS_GET_REQUEST:
    case ActionTypes.USERS_GET_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  users: usersReducer,
  loading: loadingReducer,
  error: errorReducer
});
