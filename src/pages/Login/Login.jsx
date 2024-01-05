import { useRef, useState } from "react"
import { Header } from "../../components"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LoginUser } from "../../redux/actions/Login"


const Login = () => {
    const userNameRef = useRef()
    const passwordRef = useRef()
    const [FormMsg, setFormMsg] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const submitForm = async (e) => {
        e.preventDefault()
        const password = passwordRef.current.value
        const email = userNameRef.current.value
        if (!password && !email) {
            setFormMsg("Please set email and password")
            userNameRef.current.classList.add("danger")
            passwordRef.current.classList.add("danger")
            throw new Error("Value Error")
        }

        else {
            userNameRef.current.classList.remove("danger")
            passwordRef.current.classList.remove("danger")
            setFormMsg("")
        }

        if (!email) {
            setFormMsg("Please set username or email")
            userNameRef.current.classList.add("danger")
            throw new Error("Value Error")
        }

        else {
            userNameRef.current.classList.remove("danger")
            setFormMsg("")
        }

        if (!password) {
            passwordRef.current.classList.add("danger")
            setFormMsg("Please set the password")
            throw new Error("Value Error")
        }

        else {
            passwordRef.current.classList.remove("danger")
            setFormMsg("")
        }

        const credentials = {
            "email": email,
            "password": password
        }
        LoginUser(credentials, dispatch, navigate)

        console.log()
        // LoginUser({
        //     "password": password,
        //     "username": email
        // })
        // console.log(user)

    }



    return (
        <>
            <Header />
            <div>
                <form className='auth-form' onSubmit={submitForm}>
                    <div className="text-center auth-form__upper-text">
                        <h1>Login</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint. Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                    </div>

                    <div className="auth-form__fields-container">

                        <div className="input-box">
                            <div className="input-box__label"></div>

                            <div className="input-box__input">
                                <input type="email" placeholder="Username or Email" ref={userNameRef} className="auth-input" />
                            </div>
                        </div>
                        <div className="input-box">
                            <div className="input-box__label"></div>

                            <div className="input-box__input">
                                <input type="password" placeholder="Password" ref={passwordRef} className="auth-input" />
                            </div>
                        </div>
                    </div>


                    <div className="auth-form__msg-container ">
                        {FormMsg}
                    </div>
                    <div>
                        <div className="btn-container">
                            <button type="submit" className="auth-form__submit-btn 
                            btn btn-full btn-primary btn-sm">Login </button>
                        </div>
                        <div className="auth-form__optional-text">
                            Don&apos;t have an account ? Register Here
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Login