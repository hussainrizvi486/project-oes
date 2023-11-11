import { Header } from "../../components"

const Login = () => {
    return (
        <>
        <Header />
            <div>
                <form className='auth-form-login'>
                    <div className="text-center auth-form__upper-text">
                        <h1>Login</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint. Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                    </div>

                    <div className="auth-form__fields-container">

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