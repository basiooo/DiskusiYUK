import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import LoginInput from "../../components/input/LoginInput"
import { authThunks } from "../../states/auth/action"

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogin = ({ email, password }) => {
        (
            async () => {
                try {
                    await dispatch(authThunks.asyncLogin({ email, password }))
                    toast.success("Login success")
                    navigate("/")
                } catch (error) {
                    toast.error(error.message)
                }
            }
        )()
    }

    return (
        <div className="card m-auto w-full xl:w-8/12 bg-base-200 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-2xl md:text-3xl">Login</h2>
                <LoginInput login={onLogin} />
            </div>
            <div className="text-center w-full mb-2">
                <span>Don&lsquo;t have an account?
                    {" "}
                    <Link to="/register" className="text-info">Register Now.</Link>
                </span>
            </div>
        </div>
    )
}
export default LoginPage