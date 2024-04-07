import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import RegisterInput from "../../components/input/RegisterInput"
import { authThunks } from "../../states/auth/action"

const RegisterPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onRegister = ({ name, email, password }) => {
    (
      async () => {
        try {
          await dispatch(authThunks.asyncRegister({ name, email, password }))
          toast.success("Register success")
          navigate("/login")
        } catch (error) {
          toast.error(error.message)
        }
      }
    )()
  }
  return (
    <div className="mx-auto card m-auto w-full xl:w-8/12 bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl md:text-3xl">Register</h2>
        <RegisterInput register={onRegister} />
      </div>
      <div className="text-center w-full mb-2">
        <span>Have an account?
          {" "}
          <Link to="/login" className="text-info">Login Now.</Link>
        </span>
      </div>
    </div>
  )
}
export default RegisterPage