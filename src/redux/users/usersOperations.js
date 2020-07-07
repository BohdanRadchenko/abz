import * as api from '../services'
import {
    getUsersRequest,
    getUsersSuccess,
    getUsersError,
    createUserRequest,
    createUserSuccess,
} from './usersActions';
import {handleTotalPage} from "../controller/controllerActions";

export const handleUsers = credentials => dispatch => {
    dispatch(getUsersRequest());
    return api.users().all(credentials)
        .then(response => {
            dispatch(getUsersSuccess(response.data));
            dispatch(handleTotalPage(response.data));
        })
    .catch(error => dispatch(getUsersError(error)));
};

export const handleCreateUser = data => dispatch => {
    dispatch(createUserRequest());
    return api.users().create(data)
        .then(response => {
            return dispatch(createUserSuccess(response.data));
        })
    // .catch(error => dispatch(deleteUserError(error)));
};
