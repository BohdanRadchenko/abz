import * as api from '../services'

import {
    positionGetError,
    positionGetRequest,
    positionGetSuccess, tokenGetError,
    tokenGetRequest,
    tokenGetSuccess
} from "./controllerActions";

export const handlePositions = () => dispatch => {
    dispatch(positionGetRequest());
    return api.controller().positions()
        .then(response => {
            dispatch(positionGetSuccess(response.data.positions));
        })
        .catch(error => dispatch(positionGetError(error)));
};

export const handleToken = () => dispatch => {
    dispatch(tokenGetRequest());
    return api.controller().token()
        .then(response => {
            dispatch(tokenGetSuccess(response.data.token));
        })
        .catch(error => dispatch(tokenGetError(error)));
};
