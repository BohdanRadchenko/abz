import { ActionTypes } from "../actionTypes";

//BURGER OPEN
export const burgerMenuOpen = () => ({
  type: ActionTypes.BURGER_MENU_OPEN,
})

//BURGER CLOSE
export const burgerMenuClose = () => ({
  type: ActionTypes.BURGER_MENU_CLOSE,
})

//CURRENT PAGE
export const handleCurrentPage = page => ({
  type: ActionTypes.HANDLE_CURRENT_PAGE,
  payload : page
});

//TOTAL PAGE
export const handleTotalPage = value => ({
  type: ActionTypes.HANDLE_TOTAL_PAGE,
  payload: value,
})
