/**
 * Test Scenarios
 * 
 * - threadsReducer
 *   - should return threads with the new thread when given threads/create action
 *   - should return threads when given threads/set action
 *   - should return threads with upVotesBy value that has been updated according to the data provided when given the threads/upVote action.
 *   - should return threads with cleaned upVotesBy value corresponding to the data provided when given the threads/neutralizeUpVote action.
 *   - should return threads with downVotesBy value that has been updated according to the data provided when given the threads/downVote action.
 *   - should return threads with cleaned downVotesBy value corresponding to the data provided when given the threads/neutralizeDownVote action.
 */
import { faker } from "@faker-js/faker"
import { describe, expect, it } from "vitest"

import { generateThread } from "../../utils/testUtils"
import { ThreadsActionType } from "./action"
import { threadsReducer } from "./reducer"
const threads = Array.from({ length: 10 }, () => generateThread({
    excludes: ["owner", "comments"]
}))

describe('threadsReducer', () => {
    it('should return threads with the new thread when given threads/create action', () => {
        const initialState = threads
        const thread = generateThread({
            excludes: ["owner", "comments"]
        })
        const action = { type: ThreadsActionType.CREATE, payload: { thread } }
        expect(initialState.length).toEqual(10)
        const newState = threadsReducer(initialState, action)
        expect(newState.length).toEqual(11)
        expect(newState).toContainEqual(thread)
    })

    it('should return threads when given threads/set action', () => {
        const initialState = null
        const action = { type: ThreadsActionType.SET, payload: { threads } }
        const newState = threadsReducer(initialState, action)
        expect(newState).toEqual(threads)
    })

    it('should return threads with upVotesBy value that has been updated according to the data provided when given the threads/upVote action.', () => {
        const initialState = threads
        const userId = initialState[2].ownerId
        const threadId = initialState[2].id
        const action = {
            type: ThreadsActionType.UP_VOTE, payload: {
                userId,
                threadId
            }
        }
        expect(initialState[2].upVotesBy).toEqual([])

        const newState = threadsReducer(initialState, action)

        expect(newState[2].upVotesBy.length).toEqual(1)
        expect(newState[2].upVotesBy).toContainEqual(userId)
    })

    it('should return threads with cleaned upVotesBy value corresponding to the data provided when given the threads/neutralizeUpVote action.', () => {
        const initialState = threads
        const userId = initialState[2].ownerId
        const threadId = initialState[2].id
        initialState[2].upVotesBy = [userId, faker.string.uuid()]
        const action = {
            type: ThreadsActionType.NEUTRALIZE_UP_VOTE, payload: {
                userId,
                threadId
            }
        }
        expect(initialState[2].upVotesBy.length).toEqual(2)

        const newState = threadsReducer(initialState, action)

        expect(newState[2].upVotesBy.length).toEqual(1)
        expect(newState[2].upVotesBy).not.contains(userId)
    })
    it('should return threads with downVotesBy value that has been updated according to the data provided when given the threads/downVote action.', () => {
        const initialState = threads
        const userId = initialState[2].ownerId
        const threadId = initialState[2].id
        const action = {
            type: ThreadsActionType.DOWN_VOTE, payload: {
                userId,
                threadId
            }
        }
        expect(initialState[2].downVotesBy).toEqual([])

        const newState = threadsReducer(initialState, action)

        expect(newState[2].downVotesBy.length).toEqual(1)
        expect(newState[2].downVotesBy).toContainEqual(userId)
    })

    it('should return threads with cleaned downVotesBy value corresponding to the data provided when given the threads/neutralizeDownVote action.', () => {
        const initialState = threads
        const userId = initialState[2].ownerId
        const threadId = initialState[2].id
        initialState[2].downVotesBy = [userId, faker.string.uuid()]
        const action = {
            type: ThreadsActionType.NEUTRALIZE_DOWN_VOTE, payload: {
                userId,
                threadId
            }
        }
        expect(initialState[2].downVotesBy.length).toEqual(2)

        const newState = threadsReducer(initialState, action)

        expect(newState[2].downVotesBy.length).toEqual(1)
        expect(newState[2].downVotesBy).not.contains(userId)
    })

    it('should return the initial value when given the action threads/unknown', () => {
        const initialState = threads
        const action = { type: 'threads/unknown' }
        const newState = threadsReducer(initialState, action)

        expect(newState).toEqual(initialState)
    })
})
