import { AUTHENTICATE_START, AUTHENTICATE_USER, CHECK_AUTH_STATUS, LOGGED_OUT_USER } from "../actionTypes/actionType"

export const authentication = (data) => {
    return {
        type: AUTHENTICATE_USER,
        payload: data
    }
}
export const authenticationLoading = () => {
    return {
        type: AUTHENTICATE_START,
    }
}
export const removeUserData = () => {
    return {
        type: LOGGED_OUT_USER,
    }
}

export const checkAuthStatus = () => {
    return {
        type: CHECK_AUTH_STATUS,
    }
}