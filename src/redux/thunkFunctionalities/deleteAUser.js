import { toast } from "react-toastify"
import { deleteUserAction } from "../actionCreators/userActions"

const deleteAUser = (id, token, onClickErrorModal) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:5000/api/v1/user/delete-user/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            })
            const data = await res.json()
            if (data.status === 200) {
                toast.success(data.message)
                dispatch(deleteUserAction(data?.userId))
                onClickErrorModal()
            }
            if (data.status === 401) {
                toast.error(data.message)
            }
            if (data.status === 400) {
                toast.error(data.error)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
}
export default deleteAUser;