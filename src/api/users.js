import { api, makeResponseFailed } from "./api"

export const usersAPI = {
    getUsers: async () => {
        try {
            return await api.get("users")
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },
    me: async () => {
        try {
            return await api.get("users/me")
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    }
}
