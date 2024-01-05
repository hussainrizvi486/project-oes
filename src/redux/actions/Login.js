import axios from "axios";
import { API_URL } from "../store";
import { jwtDecode } from "jwt-decode";
import toast from 'react-hot-toast';

export const LoginUser = async (credentials, dispatch, navigate) => {

    const req = await axios.post(`${API_URL}api/auth-token/`, { ...credentials })

    if (req.status === 200) {
        const data = await req.data
        const accessToken = data.access
        const user = jwtDecode(data.access)

        localStorage.setItem("authTokens", JSON.stringify(data))

        localStorage.setItem("user", JSON.stringify(user))
        toast.success('Login success.')
        dispatch({
            type: "LogIn",
            payload: {
                accessToken: accessToken,
                user: user
            }
        })

        navigate("/")
    }
}
