import { describe, expect, it } from "vitest"

import { generateLeaderboard } from '../../utils/testUtils'
import { leaderboardActionType } from './action'
import { leaderboardReducer } from './reducer'

const leaderboards = Array.from({ length: 10 }, () => generateLeaderboard())

describe('leaderboardReducer', () => {
    it('returns the initial state', () => {
        expect(leaderboardReducer(undefined, {})).toBeNull()
    })

    it(`handles ${leaderboardActionType.SET} action`, () => {
        const initialState = [null]
        const action = { type: leaderboardActionType.SET, payload: { leaderboard: leaderboards } }
        const newState = leaderboardReducer(initialState, action)
        expect(newState).toEqual(leaderboards)
    })

    it('returns current state for unknown action type', () => {
        const initialState = leaderboards
        const action = { type: 'leaderboard/unknown' }
        const newState = leaderboardReducer(initialState, action)

        expect(newState).toEqual(initialState)
    })
})
