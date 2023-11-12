import { ASSIGN_A_MEMBER_TYPE, CREATED_TEAM_TYPE, FETCHING_SINGLE_TEAM_TYPE, FETCHING_TEAM_TYPE, NEXT_STEP, PREVIOUS_STEP, RESET_STEP, UNASSIGN_A_MEMBER_TYPE, UPDATE_SINGLE_TEAM_TYPE } from "../../actionTypes/teamCreateType";

const initialState = {
    step: 1,
    allTeams: [],
    singleTeam: {
        name: '',
        category: '',
        description: '',
        members: []
    }
}

const TeamReducer = (state = initialState, action) => {

    switch (action.type) {

        case NEXT_STEP:
            return {
                ...state,
                step: state.step + 1
            };

        case PREVIOUS_STEP:
            return {
                ...state,
                step: state.step - 1
            };

        case RESET_STEP:
            return {
                ...state,
                step: 1
            };

        case FETCHING_TEAM_TYPE:
            return {
                ...state,
                allTeams: action.payload
            };

        case CREATED_TEAM_TYPE:
            return {
                ...state,
                allTeams: [...state.allTeams, action.payload]
            };
        case FETCHING_SINGLE_TEAM_TYPE:
            return {
                ...state,
                singleTeam: action.payload
            };
        case UPDATE_SINGLE_TEAM_TYPE:
            return {
                ...state,
                singleTeam: {
                    ...state.singleTeam,
                    name: action.payload.name,
                    category: action.payload.category,
                    description: action.payload.description,
                }
            };
        case ASSIGN_A_MEMBER_TYPE:
            return {
                ...state,
                singleTeam: {
                    ...state.singleTeam,
                    members: [...state.singleTeam.members, action.payload]
                }
            };
        case UNASSIGN_A_MEMBER_TYPE:
            return {
                ...state,
                singleTeam: {
                    ...state.singleTeam,
                    members: state?.singleTeam?.members.filter(member => member._id !== action.payload)
                }
            };

        default:
            return state;
    }
}

export default TeamReducer;