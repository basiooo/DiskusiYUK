import { hideLoading, showLoading } from "react-redux-loading-bar"

import { commentsAPI } from "../../api/comments"
import { threadsAPI } from "../../api/threads"

export const ThreadActionType = {
    SET: 'thread/set',
    UP_VOTE: 'thread/upVote',
    DOWN_VOTE: 'thread/downVote',
    NEUTRALIZE_UP_VOTE: 'thread/neutralizeUpVote',
    NEUTRALIZE_DOWN_VOTE: 'thread/neutralizeDownVote',
    ADD_COMMENT: 'thread/addComment',
    UP_VOTE_COMMENT: 'thread/upVoteComment',
    DOWN_VOTE_COMMENT: 'thread/downVoteComment',
    NEUTRALIZE_UP_VOTE_COMMENT: 'thread/neutralizeUpVoteComment',
    NEUTRALIZE_DOWN_VOTE_COMMENT: 'thread/neutralizeDownVoteComment',
}

export const threadAction = {
    set(thread) {
        return {
            type: ThreadActionType.SET,
            payload: {
                thread,
            },
        }
    },
    upVoteThread(userId, threadId) {
        return {
            type: ThreadActionType.UP_VOTE,
            payload: {
                userId,
                threadId
            }
        }
    },
    neutralizeUpVoteThread(userId, threadId) {
        return {
            type: ThreadActionType.NEUTRALIZE_UP_VOTE,
            payload: {
                userId,
                threadId
            }
        }
    },
    downVoteThread(userId, threadId) {
        return {
            type: ThreadActionType.DOWN_VOTE,
            payload: {
                userId,
                threadId
            }
        }
    },
    neutralizeDownVoteThread(userId, threadId) {
        return {
            type: ThreadActionType.NEUTRALIZE_DOWN_VOTE,
            payload: {
                userId,
                threadId
            }
        }
    },
    addComment(comment) {
        return {
            type: ThreadActionType.ADD_COMMENT,
            payload: {
                comment
            }
        }
    },
    upVoteComment(userId, commentId) {
        return {
            type: ThreadActionType.UP_VOTE_COMMENT,
            payload: {
                userId,
                commentId
            }
        }
    },
    neutralizeUpVoteComment(userId, commentId) {
        return {
            type: ThreadActionType.NEUTRALIZE_UP_VOTE_COMMENT,
            payload: {
                userId,
                commentId
            }
        }
    },
    downVoteComment(userId, commentId) {
        return {
            type: ThreadActionType.DOWN_VOTE_COMMENT,
            payload: {
                userId,
                commentId
            }
        }
    },
    neutralizeDownVoteComment(userId, commentId) {
        return {
            type: ThreadActionType.NEUTRALIZE_DOWN_VOTE_COMMENT,
            payload: {
                userId,
                commentId
            }
        }
    }
}

export const threadThunks = {
    asyncGetThread(id) {
        return async (dispatch) => {
            dispatch(showLoading())
            const { status, message, detailThread } = await threadsAPI.getThreat(id)
            if (status === 'fail') {
                dispatch(hideLoading())
                throw new Error(message)
            }
            dispatch(threadAction.set(detailThread))
            dispatch(hideLoading())
        }
    },
    asyncUpVoteThread({ threadId }) {
        return async (dispatch, getState) => {
            dispatch(showLoading())
            const { auth } = getState()

            const { status, message } = await threadsAPI.upVote({
                threadId
            })
            if (status === "failed") {
                dispatch(hideLoading())
                throw new Error(message)
            }
            dispatch(threadAction.upVoteThread(
                auth.id,
                threadId
            ))
            dispatch(hideLoading())
        }
    },
    asyncNeutralizeUpVoteThread({ threadId }) {
        return async (dispatch, getState) => {
            dispatch(showLoading())
            const { auth } = getState()

            const { status, message } = await threadsAPI.neutralizeVote({
                threadId
            })
            if (status === "failed") {
                dispatch(hideLoading())
                throw new Error(message)
            }
            dispatch(threadAction.neutralizeUpVoteThread(
                auth.id,
                threadId
            ))
            dispatch(hideLoading())
        }
    },
    asyncDownVoteThread({ threadId }) {
        return async (dispatch, getState) => {
            dispatch(showLoading())
            const { auth } = getState()

            const { status, message } = await threadsAPI.downVote({
                threadId
            })
            if (status === "failed") {
                dispatch(hideLoading())
                throw new Error(message)
            }
            dispatch(threadAction.downVoteThread(
                auth.id,
                threadId
            ))
            dispatch(hideLoading())
        }
    },
    asyncNeutralizeDownVoteThread({ threadId }) {
        return async (dispatch, getState) => {
            dispatch(showLoading())
            const { auth } = getState()

            const { status, message } = await threadsAPI.neutralizeVote({
                threadId
            })
            if (status === "failed") {
                dispatch(hideLoading())
                throw new Error(message)
            }
            dispatch(threadAction.neutralizeDownVoteThread(
                auth.id,
                threadId
            ))
            dispatch(hideLoading())
        }
    },
    asyncAddComment({ threadId, comment }) {
        return async (dispatch) => {
            dispatch(showLoading())
            const { status, message, comment: responseComment } = await commentsAPI.add({
                threadId, comment
            })
            if (status === "failed") {
                dispatch(hideLoading())
                throw new Error(message)
            }
            dispatch(threadAction.addComment(
                responseComment
            ))
            dispatch(hideLoading())
        }
    },
    asyncUpVoteComment({ threadId, commentId }) {
        return async (dispatch, getState) => {
            dispatch(showLoading())
            const { auth } = getState()

            const { status, message } = await commentsAPI.upVote({
                threadId, commentId
            })
            if (status === "failed") {
                dispatch(hideLoading())
                throw new Error(message)
            }
            dispatch(threadAction.upVoteComment(
                auth.id,
                commentId
            ))
            dispatch(hideLoading())
        }
    },
    asyncNeutralizeUpVoteComment({ threadId, commentId }) {
        return async (dispatch, getState) => {
            dispatch(showLoading())
            const { auth } = getState()

            const { status, message } = await commentsAPI.neutralizeVote({
                threadId, commentId
            })
            if (status === "failed") {
                dispatch(hideLoading())
                throw new Error(message)
            }
            dispatch(threadAction.neutralizeUpVoteComment(
                auth.id,
                commentId
            ))
            dispatch(hideLoading())
        }
    },
    asyncDownVoteComment({ threadId, commentId }) {
        return async (dispatch, getState) => {
            dispatch(showLoading())
            const { auth } = getState()

            const { status, message } = await commentsAPI.downVote({
                threadId, commentId
            })
            if (status === "failed") {
                dispatch(hideLoading())
                throw new Error(message)
            }
            dispatch(threadAction.downVoteComment(
                auth.id,
                commentId
            ))
            dispatch(hideLoading())
        }
    },
    asyncNeutralizeDownVoteComment({ threadId, commentId }) {
        return async (dispatch, getState) => {
            dispatch(showLoading())
            const { auth } = getState()

            const { status, message } = await commentsAPI.neutralizeVote({
                threadId, commentId
            })
            if (status === "failed") {
                dispatch(hideLoading())
                throw new Error(message)
            }
            dispatch(threadAction.neutralizeDownVoteComment(
                auth.id,
                commentId
            ))
            dispatch(hideLoading())
        }
    }
}