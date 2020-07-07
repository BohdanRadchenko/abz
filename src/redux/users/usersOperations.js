import * as api from '../services'
import {
    getUsersRequest,
    getUsersSuccess,
    getUsersError,
    createUserRequest,
    createUserSuccess,
} from './usersActions';

export const handleUsers = credentials => dispatch => {
    dispatch(getUsersRequest());
    return api.users().all(credentials)
        .then(response => {
            return dispatch(getUsersSuccess(response.data));
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
