import { ActionTypes } from "../actionTypes";

//USERS GET
export const getUsersRequest = () => ({
  type: ActionTypes.USERS_GET_REQUEST,
});

export const getUsersSuccess = response => ({
  type: ActionTypes.USERS_GET_SUCCESS,
  payload: response,
});

export const getUsersError = error => ({
  type: ActionTypes.USERS_GET_ERROR,
  payload: error,
});

//USER CREATE
export const createUserRequest = () => ({
  type: ActionTypes.USER_CREATE_REQUEST,
});

export const createUserSuccess = response => ({
  type: ActionTypes.USER_CREATE_SUCCESS,
  payload: response,
});

export const createUserError = error => ({
  type: ActionTypes.USER_CREATE_ERROR,
  payload: error,
});
