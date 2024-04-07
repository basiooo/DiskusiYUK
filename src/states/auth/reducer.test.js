import { describe, expect, it } from "vitest"

import { generateUser } from '../../utils/testUtils'
import { AuthActionType } from "./action"
import authReducer from "./reducer"

const auth = generateUser()
describe('authReducer', () => {
    it('Initial state : This test ensures that the reducer returns null when the initial state is undefined.', () => {
        expect(authReducer(undefined, {})).toBeNull()
    })

    it(`handles ${AuthActionType.SET} action`, () => {
        const initialState = null
        const action = { type: AuthActionType.SET, payload: { auth } }
        const newState = authReducer(initialState, action)
        expect(newState).toEqual(auth)
    })

    it(`handles ${AuthActionType.UNSET} action`, () => {
        const initialState = auth
        const action = { type: AuthActionType.UNSET }
        const newState = authReducer(initialState, action)
        expect(newState).toBeNull()
    })

    it('returns current state for unknown action type', () => {
        const initialState = auth
        const action = { type: 'auth/unknown' }
        const newState = authReducer(initialState, action)
        expect(newState).toEqual(initialState)
    })
})
