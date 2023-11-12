import { toast } from "react-toastify"
import { fetchASingleTeamInfo } from "../actionCreators/teamActions"

const fetchSingleTeam = (id, token, navigate) => {

    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:5000/api/v1/team/teamInfo/${id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application.json',
                    'authorization': `Bearer ${token}`
                },

            })
            const data = await res.json()
            if (data.status === 200) {
                dispatch(fetchASingleTeamInfo(data?.data))
            }
            if (data.status === 400) {
                toast.error(data.error)
                navigate('/')
            }
        } catch (error) {
            toast.error(error.message)
            navigate('/')
        }

    }
}

export default fetchSingleTeam;