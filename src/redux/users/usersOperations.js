import * as api from '../services'
import {
    getUsersRequest,
    getUsersSuccess,
    getUsersError,
    createUserRequest,
    createUserSuccess, createUserError,
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

export const handleCreateUser = (data, token) => dispatch => {
    dispatch(createUserRequest());
    return api.users().create(data, token)
        .then(response => {
            return api.users().all(1)
                .then(response => {
                    dispatch(createUserSuccess(response.data));
                    dispatch(handleTotalPage(response.data));
                })
        })
    .catch(error => dispatch(createUserError(error)));
};
