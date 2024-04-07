import { faker } from "@faker-js/faker"
import { describe, expect, it } from "vitest"

import { generateComment, generateThread } from "../../utils/testUtils"
import { ThreadActionType } from "./action"
import { threadReducer } from "./reducer"
const thread = generateThread({
    excludes: ["totalComments", "ownerId"]
})

describe('threadReducer', () => {
    it('returns the initial state', () => {
        expect(threadReducer(undefined, {})).toBeNull()
    })

    it(`handles ${ThreadActionType.SET} action`, () => {
        const initialState = null
        const action = { type: ThreadActionType.SET, payload: { thread } }
        const newState = threadReducer(initialState, action)

        expect(newState).toEqual(thread)
    })

    it(`handles ${ThreadActionType.UP_VOTE} action`, () => {
        const initialState = thread
        const userId = initialState.owner.id
        const action = {
            type: ThreadActionType.UP_VOTE, payload: {
                userId
            }
        }
        expect(initialState.upVotesBy).toEqual([])

        const newState = threadReducer(initialState, action)

        expect(newState.upVotesBy).toContainEqual(userId)
    })

    it(`handles ${ThreadActionType.NEUTRALIZE_UP_VOTE} action`, () => {
        const initialState = thread
        const userId = initialState.owner.id
        initialState.upVotesBy = [userId, faker.string.uuid()]
        const action = {
            type: ThreadActionType.NEUTRALIZE_UP_VOTE, payload: {
                userId
            }
        }
        expect(initialState.upVotesBy.length).toEqual(2)

        const newState = threadReducer(initialState, action)

        expect(newState.upVotesBy.length).toEqual(1)
        expect(newState.upVotesBy).not.contains(userId)
    })

    it(`handles ${ThreadActionType.DOWN_VOTE} action`, () => {
        const initialState = thread
        const userId = initialState.owner.id
        const action = {
            type: ThreadActionType.DOWN_VOTE, payload: {
                userId
            }
        }
        expect(initialState.downVotesBy).toEqual([])

        const newState = threadReducer(initialState, action)

        expect(newState.downVotesBy).toContainEqual(userId)
    })

    it(`handles ${ThreadActionType.NEUTRALIZE_DOWN_VOTE} action`, () => {
        const initialState = thread
        const userId = initialState.owner.id
        initialState.downVotesBy = [userId, faker.string.uuid()]
        const action = {
            type: ThreadActionType.NEUTRALIZE_DOWN_VOTE, payload: {
                userId
            }
        }
        expect(initialState.downVotesBy.length).toEqual(2)

        const newState = threadReducer(initialState, action)

        expect(newState.downVotesBy.length).toEqual(1)
        expect(newState.downVotesBy).not.contains(userId)
    })


    it(`handles ${ThreadActionType.ADD_COMMENT} action`, () => {
        const initialState = thread
        initialState.comments = [
            generateComment()
        ]
        const comment = generateComment()
        const action = {
            type: ThreadActionType.ADD_COMMENT, payload: {
                comment
            }
        }
        expect(initialState.comments.length).toEqual(1)

        const newState = threadReducer(initialState, action)

        expect(newState.comments.length).toEqual(2)
        expect(newState.comments).toContainEqual(comment)
    })

    it(`handles ${ThreadActionType.UP_VOTE_COMMENT} action`, () => {
        const initialState = thread
        const userId = initialState.owner.id
        initialState.comments = [
            generateComment()
        ]
        const commentId = initialState.comments[0].id
        const action = {
            type: ThreadActionType.UP_VOTE_COMMENT, payload: {
                userId,
                commentId
            }
        }
        expect(initialState.comments[0].upVotesBy).toEqual([])

        const newState = threadReducer(initialState, action)

        expect(newState.comments[0].upVotesBy).toContainEqual(userId)
    })

    it(`handles ${ThreadActionType.NEUTRALIZE_UP_VOTE_COMMENT} action`, () => {
        const initialState = thread
        const userId = initialState.owner.id
        initialState.comments = [
            generateComment({
                upVotesBy: [userId]
            })
        ]
        const commentId = initialState.comments[0].id
        const action = {
            type: ThreadActionType.NEUTRALIZE_UP_VOTE_COMMENT, payload: {
                userId,
                commentId
            }
        }
        expect(initialState.comments[0].upVotesBy.length).toEqual(1)

        const newState = threadReducer(initialState, action)

        expect(newState.comments[0].upVotesBy.length).toEqual(0)
    })


    it(`handles ${ThreadActionType.DOWN_VOTE_COMMENT} action`, () => {
        const initialState = thread
        const userId = initialState.owner.id
        initialState.comments = [
            generateComment()
        ]
        const commentId = initialState.comments[0].id
        const action = {
            type: ThreadActionType.DOWN_VOTE_COMMENT, payload: {
                userId,
                commentId
            }
        }
        expect(initialState.comments[0].downVotesBy).toEqual([])

        const newState = threadReducer(initialState, action)

        expect(newState.comments[0].downVotesBy).toContainEqual(userId)
    })

    it(`handles ${ThreadActionType.NEUTRALIZE_DOWN_VOTE_COMMENT} action`, () => {
        const initialState = thread
        const userId = initialState.owner.id
        initialState.comments = [
            generateComment({
                downVotesBy: [userId]
            })
        ]
        const commentId = initialState.comments[0].id
        const action = {
            type: ThreadActionType.NEUTRALIZE_DOWN_VOTE_COMMENT, payload: {
                userId,
                commentId
            }
        }
        expect(initialState.comments[0].downVotesBy.length).toEqual(1)

        const newState = threadReducer(initialState, action)

        expect(newState.comments[0].downVotesBy.length).toEqual(0)
    })

    it('returns current state for unknown action type', () => {
        const initialState = thread
        const action = { type: 'thread/unknown' }
        const newState = threadReducer(initialState, action)

        expect(newState).toEqual(initialState)
    })
})
