import { ASSIGN_A_MEMBER_TYPE, CREATED_TEAM_TYPE, FETCHING_SINGLE_TEAM_TYPE, FETCHING_TEAM_TYPE, UNASSIGN_A_MEMBER_TYPE, UPDATE_SINGLE_TEAM_TYPE } from "../actionTypes/teamCreateType"

export const createdTeamAction = (data) => {
    return {
        type: CREATED_TEAM_TYPE,
        payload: data
    }
}
export const fetchTeamAction = (data) => {
    return {
        type: FETCHING_TEAM_TYPE,
        payload: data
    }
}
export const fetchASingleTeamInfo = (data) => {
    return {
        type: FETCHING_SINGLE_TEAM_TYPE,
        payload: data
    }
}
export const updateASingleTeamInfo = (data) => {
    return {
        type: UPDATE_SINGLE_TEAM_TYPE,
        payload: data
    }
}
export const assignAMemberToTeam = (data) => {
    return {
        type: ASSIGN_A_MEMBER_TYPE,
        payload: data
    }
}
export const unassignAMemberToTeam = (data) => {
    return {
        type: UNASSIGN_A_MEMBER_TYPE,
        payload: data
    }
}