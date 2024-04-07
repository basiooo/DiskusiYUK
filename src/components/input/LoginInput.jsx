import PropTypes from 'prop-types'
import { useState } from 'react'

import useInput from '../../hooks/useInput'

const LoginInput = ({ login }) => {
    const [email, onEmailChange] = useInput('')
    const [password, onPasswordChange] = useInput('')
    const [isDisabled, setIsDisabled] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsDisabled(true)
        login({
            email,
            password
        })
        setTimeout(() => {
            setIsDisabled(false)
        }, 500)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={onEmailChange} className="input input-bordered focus:input-info w-full my-2" required />
            <input type="password" placeholder="Password" value={password} onChange={onPasswordChange} className="input input-bordered focus:input-info w-full my-2" required />
            <button type="submit" disabled={isDisabled} className="btn btn-info w-full mt-2 text-lg">Login</button>
        </form>
    )
}
LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput