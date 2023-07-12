import { all, call, put, takeLatest } from "redux-saga/effects";
import { getUserFailure, getUserSuccess } from "../../actions";
import * as types from "../../types";

let userApi: types.UserType;
const userRequest = async (name: string) => {
    try {
        const request = await fetch(`https://api.github.com/users/${name}`);
        const response = await request.json();
        userApi = response;
        return true;
    } catch (error) {
        return false;
    }
};

export function* userData(action: { type: string; payload: string }) {
    try {
        yield call(userRequest, action.payload);
        yield put(getUserSuccess(userApi));
    } catch (error) {
        yield put(getUserFailure("userData failed"));
    }
}

export default all([takeLatest(types.GET_USER_REQUEST, userData)]);
