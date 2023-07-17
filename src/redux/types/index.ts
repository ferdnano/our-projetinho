export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export type UserType = {
    name?: string;
    avatar_url?: string;
};

export type CatType = {
    id: string;
    url: string;
    width: number;
    height: number;
};
