/**
 * Test Scenarios
 * 
 * - leaderboardReducer
 *   - should return a leaderboards when given leaderboard/set action
 *   - should return the initial value when given the action leaderboard/unknown
 */
import { describe, expect, it } from "vitest"

import { generateLeaderboard } from '../../utils/testUtils'
import { leaderboardActionType } from './action'
import { leaderboardReducer } from './reducer'

const leaderboards = Array.from({ length: 10 }, () => generateLeaderboard())

describe('leaderboardReducer', () => {
    it('should return a leaderboards when given leaderboard/set action', () => {
        const initialState = [null]
        const action = { type: leaderboardActionType.SET, payload: { leaderboard: leaderboards } }
        const newState = leaderboardReducer(initialState, action)
        expect(newState).toEqual(leaderboards)
    })

    it('should return the initial value when given the action leaderboard/unknown', () => {
        const initialState = leaderboards
        const action = { type: 'leaderboard/unknown' }
        const newState = leaderboardReducer(initialState, action)

        expect(newState).toEqual(initialState)
    })
})
