import { toast } from "react-toastify"
import { fetchUsersAction } from "../actionCreators/userActions"

const fetchUser = (token) => {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:5000/api/v1/user', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            })
            const data = await res.json()

            if (data.status === 200) {
                dispatch(fetchUsersAction(data.users))
            }
            if (data?.status === 400) {
                toast.error(data?.error)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
}

export default fetchUser;