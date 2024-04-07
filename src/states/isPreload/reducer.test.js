import { describe, expect, it } from "vitest"

import { IsPreloadActionType } from "./action"
import { isPreloadReducer } from "./reducer"


describe('isPreloadReducer', () => {
    it('returns the initial state', () => {
        expect(isPreloadReducer(undefined, true)).toEqual(true)
    })

    it(`handles ${IsPreloadActionType.SET} action`, () => {
        const initialState = true
        const action = { type: IsPreloadActionType.SET, payload: { preload: false } }
        const newState = isPreloadReducer(initialState, action)
        expect(newState).toEqual(false)
    })

    it('returns current state for unknown action type', () => {
        const initialState = true
        const action = { type: 'ispreload/unknown' }
        const newState = isPreloadReducer(initialState, action)

        expect(newState).toEqual(initialState)
    })
})
