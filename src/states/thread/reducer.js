import { ThreadActionType } from "./action"

export const threadReducer = (thread = null, action = {}) => {
    switch (action.type) {
        case ThreadActionType.SET:
            return action.payload.thread
        case ThreadActionType.UP_VOTE:
            return {
                ...thread,
                upVotesBy: [...thread.upVotesBy, action.payload.userId],
            }
        case ThreadActionType.NEUTRALIZE_UP_VOTE:
            return {
                ...thread,
                upVotesBy: thread.upVotesBy.filter(
                    (vote) => vote !== action.payload.userId,
                ),
            }
        case ThreadActionType.DOWN_VOTE:
            return {
                ...thread,
                downVotesBy: [...thread.downVotesBy, action.payload.userId],
            }
        case ThreadActionType.NEUTRALIZE_DOWN_VOTE:
            return {
                ...thread,
                downVotesBy: thread.downVotesBy.filter(
                    (vote) => vote !== action.payload.userId,
                ),
            }
        case ThreadActionType.ADD_COMMENT:
            return {
                ...thread,
                comments: [action.payload.comment, ...thread.comments],
            }
        case ThreadActionType.UP_VOTE_COMMENT: {
            const updatedComments = thread.comments.slice()
            const index = updatedComments.findIndex(comment => comment.id === action.payload.commentId)
            if (index !== -1) {
                updatedComments[index] = {
                    ...updatedComments[index],
                    upVotesBy: [action.payload.userId, ...updatedComments[index].upVotesBy]
                }
            }
            return {
                ...thread,
                comments: updatedComments
            }
        }
        case ThreadActionType.NEUTRALIZE_UP_VOTE_COMMENT: {
            const updatedComments = thread.comments.slice()
            const index = updatedComments.findIndex(comment => comment.id === action.payload.commentId)

            if (index !== -1) {
                updatedComments[index] = {
                    ...updatedComments[index],
                    upVotesBy: updatedComments[index].upVotesBy.filter(userId => userId !== action.payload.userId)
                }
            }

            return {
                ...thread,
                comments: updatedComments
            }
        }
        case ThreadActionType.DOWN_VOTE_COMMENT: {
            const updatedComments = thread.comments.slice()
            const index = updatedComments.findIndex(comment => comment.id === action.payload.commentId)
            if (index !== -1) {
                updatedComments[index] = {
                    ...updatedComments[index],
                    downVotesBy: [action.payload.userId, ...updatedComments[index].downVotesBy]
                }
            }
            return {
                ...thread,
                comments: updatedComments
            }
        }
        case ThreadActionType.NEUTRALIZE_DOWN_VOTE_COMMENT: {
            const updatedComments = thread.comments.slice()
            const index = updatedComments.findIndex(comment => comment.id === action.payload.commentId)

            if (index !== -1) {
                updatedComments[index] = {
                    ...updatedComments[index],
                    downVotesBy: updatedComments[index].downVotesBy.filter(userId => userId !== action.payload.userId)
                }
            }

            return {
                ...thread,
                comments: updatedComments
            }
        }
        default:
            return thread
    }
}