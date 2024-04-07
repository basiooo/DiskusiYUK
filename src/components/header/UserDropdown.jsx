
import PropTypes from 'prop-types'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

import { authThunks } from '../../states/auth/action'
import { UserShape } from '../../utils/shapes'
const UserDropdown = ({ auth }) => {
    const dispatch = useDispatch()

    const handleLogoOut = async () => {
        try {
            await dispatch(authThunks.asyncLogout())
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className="dropdown dropdown-end !z-50" >
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
            >
                <div className="w-15 rounded-full">
                    <img
                        alt="User Avatar"
                        src={auth.avatar}
                    />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52 border-solid border-2 border-gray-500/20 "
            >
                <li className="mx-auto">
                    <p className="!cursor-default hover:bg-transparent">
                        {auth.name}
                    </p>
                </li>
                <li className="mx-auto">
                    <p className="!cursor-default hover:bg-transparent">
                        {auth.email}
                    </p>
                </li>
                <hr className="my-1" />
                <li className="w-full">
                    <button type='button' onClick={handleLogoOut}>Logout</button>
                </li>
            </ul>
        </div>
    )
}
UserDropdown.propTypes = {
    auth: PropTypes.shape(UserShape),
}
export default UserDropdown