import * as types from "../../types";

export function getUserRequest(name: string): {
    type: string;
    payload: string;
} {
    return {
        type: types.GET_USER_REQUEST,
        payload: name,
    };
}

export function getUserSuccess(user: types.UserType): {
    type: string;
    payload: types.UserType;
} {
    return {
        type: types.GET_USER_SUCCESS,
        payload: user,
    };
}

export function getUserFailure(error: string): {
    type: string;
    payload: string;
} {
    return {
        type: types.GET_USER_FAILURE,
        payload: error,
    };
}
