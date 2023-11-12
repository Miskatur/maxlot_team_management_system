import { ADD_USER_TYPE, DELETE_USER_TYPE, FETCHING_USER_TYPE } from "../actionTypes/usersType"

export const fetchUsersAction = (data) => {
    return {
        type: FETCHING_USER_TYPE,
        payload: data
    }
}

export const addUserAction = (data) => {
    return {
        type: ADD_USER_TYPE,
        payload: data
    }
}
export const deleteUserAction = (id) => {
    return {
        type: DELETE_USER_TYPE,
        payload: id
    }
}