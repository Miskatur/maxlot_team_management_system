import { toast } from "react-toastify"
import { createdTeamAction } from "../actionCreators/teamActions";

const createTeam = (formData, token, handleModal) => {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:5000/api/v1/team/create-team', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            })
            const data = await res.json()

            if (data.status === 200) {
                toast.success(data.message)
                dispatch(createdTeamAction(data?.team))
                handleModal()
            }
            if (data.status === 400) {
                toast.success(data.error)
            }
            if (data.status === 401) {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
}

export default createTeam;