import * as types from "../../types";

interface UserState {
    user?: types.UserType;
    loading?: boolean;
    error_message?: string;
}

const initialState: UserState = {
    user: {
        avatar_url: "",
        name: "",
    },
    loading: false,
    error_message: "",
};

export const userReducer = (
    state = initialState,
    action: {
        type: string;
        payload: types.UserType;
    }
) => {
    switch (action.type) {
        case types.GET_USER_REQUEST:
            return {
                ...state,
                loading: true,
                user: action.payload,
                error_message: "",
            };
        case types.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error_message: "",
            };
        case types.GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error_message: action.payload,
            };

        default:
            return state;
    }
};
