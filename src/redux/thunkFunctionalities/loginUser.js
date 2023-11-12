import { toast } from "react-toastify";
import { authentication, authenticationLoading } from "../actionCreators/actionCreators";
import 'react-toastify/dist/ReactToastify.css';

const loginUser = (data, navigate) => {
    return async (dispatch) => {
        dispatch(authenticationLoading())
        try {
            const res = await fetch('https://littleprogrammingserver.vercel.app/api/v1/user/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const result = await res.json()

            if (result.status === 401) {
                toast.error(result.error)
                dispatch(authenticationLoading())
            }
            if (result.status === 400) {
                toast.error(result.error)
                dispatch(authenticationLoading())
            }
            if (result.status === 200) {
                localStorage.setItem('user', JSON.stringify(result?.data))
                dispatch(authentication(result?.data))
                dispatch(authenticationLoading())
                navigate('/')
                toast.success(result.message)
            }

        } catch (error) {
            toast.error(error.message)
            dispatch(authenticationLoading())
        }
    }
}

export default loginUser;