import { toast } from "react-toastify"
import { assignAMemberToTeam } from "../actionCreators/teamActions"

const addUserToATeam = (teamId, userId, token, handleAssignModal) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:5000/api/v1/team/assign/${teamId}/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            })
            const data = await res.json()

            if (data.status === 200) {
                toast.success(data.message)
                dispatch(assignAMemberToTeam(data.team))
                handleAssignModal()
            }
            if (data.status === 400) {
                toast.error(data.error)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }
}
export default addUserToATeam;