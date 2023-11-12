import { toast } from "react-toastify"
import { updateASingleTeamInfo } from "../actionCreators/teamActions"

const updateTeamInfo = (formData, teamId, token, handleModal) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`https://littleprogrammingserver.vercel.app/api/v1/team/update-team/${teamId}`, {
                method: 'PUT',
                body: JSON.stringify(formData),
                headers: {
                    'Content-type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            })
            const data = await res.json()

            if (data.status === 200) {
                dispatch(updateASingleTeamInfo(data?.team))
                toast.success(data?.message)
                handleModal()
            }
            if (data?.status === 400) {
                toast.error(data?.error)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
}

export default updateTeamInfo;