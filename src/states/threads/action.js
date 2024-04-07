import { hideLoading, showLoading } from "react-redux-loading-bar"

import { threadsAPI } from "../../api/threads"

export const ThreadsActionType = {
  CREATE: 'threads/create',
  SET: 'threads/set',
  UP_VOTE: 'threads/upVote',
  DOWN_VOTE: 'threads/downVote',
  NEUTRALIZE_UP_VOTE: 'threads/neutralizeUpVote',
  NEUTRALIZE_DOWN_VOTE: 'threads/neutralizeDownVote',
  UPVOTE_COMMENT: 'threads/upVoteComment'
}

export const threadsAction = {
  create(thread) {
    return {
      type: ThreadsActionType.CREATE,
      payload: {
        thread,
      },
    }
  },
  set(threads) {
    return {
      type: ThreadsActionType.SET,
      payload: {
        threads,
      },
    }
  },
  upVoteThread(userId, threadId) {
    return {
      type: ThreadsActionType.UP_VOTE,
      payload: {
        userId,
        threadId
      }
    }
  },
  neutralizeUpVoteThread(userId, threadId) {
    return {
      type: ThreadsActionType.NEUTRALIZE_UP_VOTE,
      payload: {
        userId,
        threadId
      }
    }
  },
  downVoteThread(userId, threadId) {
    return {
      type: ThreadsActionType.DOWN_VOTE,
      payload: {
        userId,
        threadId
      }
    }
  },
  neutralizeDownVoteThread(userId, threadId) {
    return {
      type: ThreadsActionType.NEUTRALIZE_DOWN_VOTE,
      payload: {
        userId,
        threadId
      }
    }
  },
}

export const threadsThunks = {
  asyncCreateThreads({ title, category, body }) {
    return async (dispatch) => {
      dispatch(showLoading())
      const { status, message, thread } = await threadsAPI.newThreats({
        title, category, body
      }
      )
      if (status === 'failed') {
        dispatch(hideLoading())
        throw new Error(message)
      }
      dispatch(threadsAction.create(thread))
      dispatch(hideLoading())
    }
  },

  asyncGetThreads() {
    return async (dispatch) => {
      dispatch(showLoading())
      const { status, message, threads } = await threadsAPI.getThreats()

      if (status === 'failed') {
        dispatch(hideLoading())
        throw new Error(message)
      }
      dispatch(threadsAction.set(threads))
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
      dispatch(threadsAction.upVoteThread(
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
      dispatch(threadsAction.neutralizeUpVoteThread(
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
      dispatch(threadsAction.downVoteThread(
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
      dispatch(threadsAction.neutralizeDownVoteThread(
        auth.id,
        threadId
      ))
      dispatch(hideLoading())
    }
  },
}