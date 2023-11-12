import { ADD_USER_TYPE, DELETE_USER_TYPE, FETCHING_USER_TYPE } from "../../actionTypes/usersType";

const initialState = {
    users: [],
}

const UserReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCHING_USER_TYPE:
            return {
                ...state,
                users: action.payload
            };

        case ADD_USER_TYPE:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case DELETE_USER_TYPE:
            return {
                ...state,
                users: state.users.filter(user => user?._id !== action.payload)
            };


        default:
            return state;
    }
}

export default UserReducer;
