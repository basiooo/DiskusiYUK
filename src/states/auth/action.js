import { hideLoading, showLoading } from "react-redux-loading-bar"

import { authAPI } from "../../api/auth"
import { usersAPI } from "../../api/users"
import { tokenHandler } from "../../utils/accessToken"

export const AuthActionType = {
    SET: 'auth/set',
    UNSET: 'auth/unset',
}

export const authAction = {
    set(auth) {
        return {
            type: AuthActionType.SET,
            payload: {
                auth,
            },
        }
    },
    unset() {
        return {
            type: AuthActionType.UNSET,
        }
    },
}

export const authThunks = {
    asyncLogin({ email, password }) {
        return async (dispatch) => {
            dispatch(showLoading())
            const { status, message, token } = await authAPI.login(
                {
                    email,
                    password
                }
            )
            if (status === "failed") {
                dispatch(hideLoading())
                throw new Error(message)
            }
            tokenHandler.set(token)

            const meResponse = await usersAPI.me()

            dispatch(authAction.set(meResponse.user))
            dispatch(hideLoading())
        }
    },
    asyncRegister({ name, email, password }) {
        return async (dispatch) => {
            dispatch(showLoading())
            const { status, message } = await authAPI.register(
                {
                    name,
                    email,
                    password
                }
            )
            if (status === "failed") {
                dispatch(hideLoading())
                throw new Error(message)
            }
            dispatch(hideLoading())
        }
    },

    asyncLogout() {
        return (dispatch) => {
            tokenHandler.unset()
            dispatch(authAction.unset())
        }
    }
}
