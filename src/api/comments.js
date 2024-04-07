import { api, makeResponseFailed } from "./api"

export const commentsAPI = {
    add: async ({ threadId, comment }) => {
        try {
            return await api.post(`threads/${threadId}/comments`, {
                content: comment
            })
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },
    upVote: async ({ threadId, commentId }) => {
        try {
            return await api.post(`threads/${threadId}/comments/${commentId}/up-vote`)
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },
    neutralizeVote: async ({ threadId, commentId }) => {
        try {
            return await api.post(`threads/${threadId}/comments/${commentId}/neutral-vote`)
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },
    downVote: async ({ threadId, commentId }) => {
        try {
            return await api.post(`threads/${threadId}/comments/${commentId}/down-vote`)
        } catch (error) {
            return makeResponseFailed({
                message: error,
            })
        }
    },
}
