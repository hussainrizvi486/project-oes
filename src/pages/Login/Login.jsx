
import { Header } from "../../components/Header/Header"

const Login = () => {
    return (
        <>
            <div>
                <form className='auth-form-login'>
                    <div className="input-box">
                        <div className="input-box__label"></div>

                        <div className="input-box__input">
                            <input type="text" placeholder="Username or Email" />
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="input-box__label"></div>

                        <div className="input-box__input">
                            <input type="text" placeholder="Password" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login