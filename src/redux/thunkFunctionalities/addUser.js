import { toast } from "react-toastify"
import { addUserAction } from "../actionCreators/userActions"

const addUser = (formData, token, handleModal) => {
    return async (dispatch) => {
        try {
            const res = await fetch('http://localhost:5000/api/v1/user/register-user', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            })
            const data = await res.json()

            if (data.status === 200) {
                dispatch(addUserAction(data.user))
                toast.success(data?.message)
                handleModal()
            }
            if (data.status === 400) {
                toast.error(data?.message)
            }
        }
        catch (error) {
            toast.error(error?.message)
        }
    }
}

export default addUser;