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

const totalPageReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case ActionTypes.HANDLE_TOTAL_PAGE:
      return payload.total_pages;
    default:
      return state;
  }
};

const currentPageReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case ActionTypes.HANDLE_CURRENT_PAGE:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  burgerMenu: burgerMenuReducer,
  totalPage : totalPageReducer,
  currentPage : currentPageReducer
});