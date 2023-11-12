import { toast } from "react-toastify"
import { fetchTeamAction } from "../actionCreators/teamActions"

const fetchTeams = (token) => {
    return async (dispatch) => {
        try {
            const res = await fetch('https://littleprogrammingserver.vercel.app/api/v1/team/allTeam', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            })
            const teams = await res.json()

            if (teams?.status === 200) {
                dispatch(fetchTeamAction(teams?.teams))
            }
            if (teams?.status === 400) {
                toast.error(teams?.error)
            }
        } catch (error) {
            toast.error(error.message)
        }

    }
}

export default fetchTeams;