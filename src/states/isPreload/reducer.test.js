/**
 * Test Scenarios
 * 
 * - isPreloadReducerleaderboardReducer
 *   - should return a leaderboards when given preload/set action
 *   - should return the initial value when given the action preload/unknown
 */
import { describe, expect, it } from "vitest"

import { IsPreloadActionType } from "./action"
import { isPreloadReducer } from "./reducer"


describe('isPreloadReducer', () => {
    it('should return the isPreaload when given by preload/set action', () => {
        const initialState = true
        const action = { type: IsPreloadActionType.SET, payload: { preload: false } }
        const newState = isPreloadReducer(initialState, action)
        expect(newState).toEqual(false)
    })

    it('should return the initial value when given the action preload/unknown', () => {
        const initialState = true
        const action = { type: 'ispreload/unknown' }
        const newState = isPreloadReducer(initialState, action)
        expect(newState).toEqual(initialState)
    })
})
