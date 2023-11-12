import { toast } from "react-toastify"
import { unassignAMemberToTeam } from "../actionCreators/teamActions"

const removeAUserFromATeam = (teamId, userId, token, setShowErrorModalX, index) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`https://littleprogrammingserver.vercel.app/api/v1/team/unassign/${teamId}/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            })
            const data = await res.json()

            if (data.status === 200) {
                toast.success(data.message)
                dispatch(unassignAMemberToTeam(userId))
                setShowErrorModalX(index)
            }
            if (data.status === 400) {
                toast.error(data.error)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }
}
export default removeAUserFromATeam;