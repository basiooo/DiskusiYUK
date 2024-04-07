
import { hideLoading, showLoading } from 'react-redux-loading-bar'

import { usersAPI } from '../../api/users'
import { tokenHandler } from '../../utils/accessToken'
import { authAction } from '../auth/action'

export const IsPreloadActionType = {
    SET: 'preload/set',
}

export const isPreloadAction = {
    set(preload) {
        return {
            type: IsPreloadActionType.SET,
            payload: {
                preload,
            },
        }
    }
}

export const isPreloadThunks = {
    asyncPreload() {
        return async (dispatch) => {
            dispatch(showLoading())
            try {
                let value = null
                if (tokenHandler.has()) {
                    const { status, user } = await usersAPI.me()
                    if (status !== "failed") { value = user }
                }
                dispatch(authAction.set(value))
            } catch (error) {
                dispatch(authAction.set(null))
            } finally {
                dispatch(isPreloadAction.set(false))
            }
            dispatch(hideLoading())
        }
    }
}