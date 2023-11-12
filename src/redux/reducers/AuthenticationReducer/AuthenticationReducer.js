import { AUTHENTICATE_START, AUTHENTICATE_USER, LOGGED_OUT_USER } from "../../actionTypes/actionType"

const initialState = {
    loading: false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
}

const AuthenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE_START:
            return {
                ...state,
                loading: !state.loading
            }
        case AUTHENTICATE_USER:
            return {
                ...state,
                user: action.payload,

            }
        case LOGGED_OUT_USER:
            return {
                ...state,
                user: {},

            }

        default:
            return state
    }
}

export default AuthenticationReducer;