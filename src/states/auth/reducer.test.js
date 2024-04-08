/**
 * Test Scenarios
 * 
 * - authReducer
 *   - should return a auth when given auth/set action
 *   - should return null when given by auth/unset action
 *   - should return the initial value when given the action auth/unknown
 */
import { describe, expect, it } from "vitest"

import { generateUser } from '../../utils/testUtils'
import { AuthActionType } from "./action"
import authReducer from "./reducer"

const auth = generateUser()
describe('authReducer', () => {
    it('should return a auth when given auth/set action', () => {
        const initialState = null
        const action = { type: AuthActionType.SET, payload: { auth } }
        const newState = authReducer(initialState, action)
        expect(newState).toEqual(auth)
    })

    it('should return null when given by auth/unset action', () => {
        const initialState = auth
        const action = { type: AuthActionType.UNSET }
        const newState = authReducer(initialState, action)
        expect(newState).toBeNull()
    })

    it('should return the initial value when given the action auth/unknown', () => {
        const initialState = auth
        const action = { type: 'auth/unknown' }
        const newState = authReducer(initialState, action)
        expect(newState).toEqual(initialState)
    })
})
