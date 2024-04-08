/**
 * Test Scenarios
 * 
 * - usersReducer
 *   - should return users when given users/set action
 *   - should return the initial value when given the action users/unknown
 */
import { describe, expect, it } from "vitest"

import { generateUser } from '../../utils/testUtils'
import { UsersActionType } from './action'
import { usersReducer } from './reducer'

const users = Array.from({ length: 3 }, () => generateUser())
describe('usersReducer', () => {
    it('should return users when given users/set action', () => {
        const initialState = null
        const action = { type: UsersActionType.SET, payload: { users } }
        const newState = usersReducer(initialState, action)

        expect(newState).toEqual(users)
    })

    it('should return the initial value when given the action users/unknown', () => {
        const initialState = users
        const action = { type: 'users/unknown' }
        const newState = usersReducer(initialState, action)

        expect(newState).toEqual(initialState)
    })
})
