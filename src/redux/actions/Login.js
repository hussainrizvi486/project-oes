import axios from "axios";
import { API_URL } from "../store";
import { jwtDecode } from "jwt-decode";

export const LoginUser = async (credentials, dispatch) => {
    const req = await axios.post(`${API_URL}api/auth-token/`, { ...credentials })

    if (req.status === 200) {
        const data = await req.data
        const accessToken = data.access
        const user = jwtDecode(data.access)

        localStorage.setItem("user", JSON.stringify(user))

        dispatch({
            type: "LogIn",
            payload: {
                accessToken: accessToken,
                user: user
            }
        })

    }
}
