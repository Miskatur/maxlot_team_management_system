import { combineReducers } from "redux";
import AuthenticationReducer from "./AuthenticationReducer/AuthenticationReducer";
import TeamReducer from "./TeamReducer/TeamReducer";
import UserReducer from "./UserReducer/UserReducer";

const rootReducer = combineReducers({
    user: AuthenticationReducer,
    teams: TeamReducer,
    allUsers: UserReducer
})

export default rootReducer;