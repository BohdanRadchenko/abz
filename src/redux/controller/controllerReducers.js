import {combineReducers} from 'redux';
import {ActionTypes} from '../actionTypes';

const burgerMenuReducer = (state = false, {type, payload}) => {
  switch (type) {
    case ActionTypes.BURGER_MENU_OPEN:
      return true;

    case ActionTypes.BURGER_MENU_CLOSE:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  burgerMenu: burgerMenuReducer,
});