
import PropTypes from 'prop-types'
import { useState } from 'react'

import { config } from '../../config'
import useInput from '../../hooks/useInput'

const RegisterInput = ({ register }) => {
    const [name, onNameChange] = useInput('')
    const [email, onEmailChange] = useInput('')
    const [password, onPasswordChange] = useInput('')
    const [isDisabled, setIsDisabled] = useState(false)
    const { MAX_EMAIL_LENGTH, MAX_NAME_LENGTH, MAX_PASSWORD_LENGTH, MIN_EMAIL_LENGTH, MIN_NAME_LENGTH, MIN_PASSWORD_LENGTH } = config
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsDisabled(true)
        register({
            name, email, password
        })
        setTimeout(() => {
            setIsDisabled(false)
        }, 500)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                minLength={MIN_NAME_LENGTH}
                maxLength={MAX_NAME_LENGTH}
                value={name}
                onChange={onNameChange}
                className="input input-bordered focus:input-info w-full my-2"
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={onEmailChange}
                className="input input-bordered focus:input-info w-full my-2"
                required
                minLength={MIN_EMAIL_LENGTH}
                maxLength={MAX_EMAIL_LENGTH}
            />
            <input
                type="password"
                placeholder="Password"
                minLength={MIN_PASSWORD_LENGTH}
                maxLength={MAX_PASSWORD_LENGTH}
                value={password}
                onChange={onPasswordChange}
                className="input input-bordered focus:input-info w-full my-2"
                required
            />
            <button type="submit" disabled={isDisabled} className="btn btn-info w-full mt-2 text-lg">Login</button>
        </form>

    )
}
RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput