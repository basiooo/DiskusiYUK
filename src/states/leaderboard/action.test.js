/**
 * Test Scenarios
 * 
 * - leaderboardThunks.asyncSetLeaderboard
 *   - should dispatch action correctly when data fetching success
 *   - should dispatch action correctly and trow Error when data fetching fails
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { leaderboardAPI } from '../../api/leaderboard'
import { generateLeaderboard } from '../../utils/testUtils'
import { leaderboardActions, leaderboardThunks } from './action'

const fakeLeaderboardResponseSuccess = {
    "leaderboards": Array.from({ length: 10 }, () => generateLeaderboard()),
    "status": "success",
    "message": "ok"
}

const fakeLeaderboardResponseFailed = {
    "leaderboards": [],
    "status": "failed",
    "message": "Ups, something went wrong"
}

describe("leaderboardThunks.asyncSetLeaderboard", () => {
    beforeEach(() => {
        leaderboardAPI._getLeaderboard = leaderboardAPI.getLeaderboard
    })
    afterEach(() => {
        leaderboardAPI.getLeaderboard = leaderboardAPI._getLeaderboard
        delete leaderboardAPI._getLeaderboard
    })

    it("should dispatch action correctly when data fetching success'", async () => {
        leaderboardAPI.getLeaderboard = () => Promise.resolve(fakeLeaderboardResponseSuccess)

        const dispatch = vi.fn()

        await leaderboardThunks.asyncSetLeaderboard()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(showLoading())
        expect(dispatch).toHaveBeenCalledWith(leaderboardActions.set(fakeLeaderboardResponseSuccess.leaderboards))
        expect(dispatch).toHaveBeenCalledWith(hideLoading())
    })

    it("should dispatch action correctly and trow Error when data fetching fails", async () => {
        leaderboardAPI.getLeaderboard = () => Promise.resolve(fakeLeaderboardResponseFailed)

        const dispatch = vi.fn()

        await expect(leaderboardThunks.asyncSetLeaderboard()(dispatch)).rejects.toThrowError(fakeLeaderboardResponseFailed.message).finally(() => {
            expect(dispatch).toHaveBeenCalledWith(showLoading())
            expect(dispatch).not.toBeCalledWith(leaderboardActions.set(fakeLeaderboardResponseSuccess.leaderboards))
            expect(dispatch).toHaveBeenCalledWith(hideLoading())
        })
    })
})