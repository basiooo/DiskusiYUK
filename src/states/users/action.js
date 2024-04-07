import { hideLoading, showLoading } from 'react-redux-loading-bar'

import { usersAPI } from '../../api/users'

export const UsersActionType = {
  SET: 'users/set',
}

export const usersActions = {
  set(users) {
    return {
      type: UsersActionType.SET,
      payload: {
        users,
      },
    }
  },
}

export const usersThunks = {
  asyncGetUsers() {
    return async (dispatch) => {
      dispatch(showLoading())
      const { status, users } = await usersAPI.getUsers()

      if (status === 'failed') {
        dispatch(hideLoading())
      }
      dispatch(usersActions.set(users))
      dispatch(hideLoading())
    }
  },
}
