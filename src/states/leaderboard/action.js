import { hideLoading, showLoading } from "react-redux-loading-bar"

import { leaderboardAPI } from "../../api/leaderboard"


export const leaderboardActionType = {
    SET: 'leaderboard/set',
}

export const leaderboardActions = {
    set(leaderboard) {
        return {
            type: leaderboardActionType.SET,
            payload: { leaderboard },
        }
    },
}

export const leaderboardThunks = {
    asyncSetLeaderboard() {
        return async (dispatch) => {
            dispatch(showLoading())
            const { status, message, leaderboards } = await leaderboardAPI.getLeaderboard()
            if (status === 'failed') {
                dispatch(hideLoading())
                throw new Error(message)
            }
            dispatch(leaderboardActions.set(leaderboards))
            dispatch(hideLoading())
        }
    },
}
