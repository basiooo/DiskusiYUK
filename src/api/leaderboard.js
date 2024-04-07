import { api, makeResponseFailed } from "./api"

export const leaderboardAPI = {
    getLeaderboard: async () => {
        try {
            return await api.get("leaderboards")
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },
}
