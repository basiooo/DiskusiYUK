import { leaderboardActionType } from "./action"

export const leaderboardReducer = (leaderboard = null, action = {}) => {
    switch (action.type) {
        case leaderboardActionType.SET:
            return action.payload.leaderboard
        default:
            return leaderboard
    }
}