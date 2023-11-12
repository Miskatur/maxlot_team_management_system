import { useSelector } from "react-redux"

const useToken = () => {
    const token = useSelector((state => state.user.user.token))
    return token
}

export default useToken;