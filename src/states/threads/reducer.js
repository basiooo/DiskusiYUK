import { ThreadsActionType } from "./action"

export const threadsReducer = (threads = null, action = {}) => {
  switch (action.type) {
    case ThreadsActionType.CREATE:
      return [action.payload.thread, ...threads]
    case ThreadsActionType.SET:
      return action.payload.threads
    case ThreadsActionType.UP_VOTE: {
      const index = threads.findIndex(thread => thread.id === action.payload.threadId)
      if (index !== -1) {
        const updatedThread = {
          ...threads[index],
          upVotesBy: [...threads[index].upVotesBy, action.payload.userId]
        }

        return [
          ...threads.slice(0, index),
          updatedThread,
          ...threads.slice(index + 1)
        ]
      }
      return threads
    }
    case ThreadsActionType.NEUTRALIZE_UP_VOTE: {
      const index = threads.findIndex(thread => thread.id === action.payload.threadId)
      if (index !== -1) {
        const updatedThread = {
          ...threads[index],
          upVotesBy: threads[index].upVotesBy.filter(
            (vote) => vote !== action.payload.userId,
          ),
        }

        return [
          ...threads.slice(0, index),
          updatedThread,
          ...threads.slice(index + 1)
        ]
      }
      return threads
    }
    case ThreadsActionType.DOWN_VOTE: {
      const index = threads.findIndex(thread => thread.id === action.payload.threadId)
      if (index !== -1) {
        const updatedThread = {
          ...threads[index],
          downVotesBy: [...threads[index].downVotesBy, action.payload.userId]
        }

        return [
          ...threads.slice(0, index),
          updatedThread,
          ...threads.slice(index + 1)
        ]
      }
      return threads
    }
    case ThreadsActionType.NEUTRALIZE_DOWN_VOTE: {
      const index = threads.findIndex(thread => thread.id === action.payload.threadId)
      if (index !== -1) {
        const updatedThread = {
          ...threads[index],
          downVotesBy: threads[index].downVotesBy.filter(vote => vote !== action.payload.userId)
        }

        return [
          ...threads.slice(0, index),
          updatedThread,
          ...threads.slice(index + 1)
        ]
      }
      return threads
    }
    default:
      return threads
  }
}