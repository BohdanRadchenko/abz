import { ActionTypes } from "../actionTypes";

//BURGER OPEN
export const burgerMenuOpen = () => ({
  type: ActionTypes.BURGER_MENU_OPEN,
})

//BURGER CLOSE
export const burgerMenuClose = () => ({
  type: ActionTypes.BURGER_MENU_CLOSE,
})

//TOTAL PAGE
export const handleTotalPage = value => ({
  type: ActionTypes.HANDLE_TOTAL_PAGE,
  payload: value,
})


//POSITION GET
export const positionGetRequest = () => ({
  type: ActionTypes.POSITION_GET_REQUEST,
});

export const positionGetSuccess = response => ({
  type: ActionTypes.POSITION_GET_SUCCESS,
  payload: response,
});

export const positionGetError = error => ({
  type: ActionTypes.POSITION_GET_ERROR,
  payload: error,
});

//TOKEN GET
export const tokenGetRequest = () => ({
  type: ActionTypes.TOKEN_GET_REQUEST,
});

export const tokenGetSuccess = response => ({
  type: ActionTypes.TOKEN_GET_SUCCESS,
  payload: response,
});

export const tokenGetError = error => ({
  type: ActionTypes.TOKEN_GET_ERROR,
  payload: error,
});
