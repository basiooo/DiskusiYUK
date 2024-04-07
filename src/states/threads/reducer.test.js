import { faker } from "@faker-js/faker"
import { describe, expect, it } from "vitest"

import { generateThread } from "../../utils/testUtils"
import { ThreadsActionType } from "./action"
import { threadsReducer } from "./reducer"
const threads = Array.from({ length: 10 }, () => generateThread({
    excludes: ["owner", "comments"]
}))

describe('threadsReducer', () => {
    it('returns the initial state', () => {
        expect(threadsReducer(undefined, {})).toBeNull()
    })

    it(`handles ${ThreadsActionType.CREATE} action`, () => {
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

    it(`handles ${ThreadsActionType.SET} action`, () => {
        const initialState = null
        const action = { type: ThreadsActionType.SET, payload: { threads } }
        const newState = threadsReducer(initialState, action)
        expect(newState).toEqual(threads)
    })

    it(`handles ${ThreadsActionType.UP_VOTE} action`, () => {
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

    it(`handles ${ThreadsActionType.NEUTRALIZE_UP_VOTE} action`, () => {
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
    it(`handles ${ThreadsActionType.DOWN_VOTE} action`, () => {
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

    it(`handles ${ThreadsActionType.NEUTRALIZE_DOWN_VOTE} action`, () => {
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

    it('returns current state for unknown action type', () => {
        const initialState = threads
        const action = { type: 'threads/unknown' }
        const newState = threadsReducer(initialState, action)

        expect(newState).toEqual(initialState)
    })
})
