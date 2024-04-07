import { describe, expect, it } from "vitest"

import { generateUser } from '../../utils/testUtils'
import { UsersActionType } from './action'
import { usersReducer } from './reducer'

const users = Array.from({ length: 3 }, () => generateUser())
describe('usersReducer', () => {
    it('returns the initial state', () => {
        expect(usersReducer(undefined, {})).toBeNull()
    })

    it(`handles ${UsersActionType.SET} action`, () => {
        const initialState = null
        const action = { type: UsersActionType.SET, payload: { users } }
        const newState = usersReducer(initialState, action)

        expect(newState).toEqual(users)
    })

    it('returns current state for unknown action type', () => {
        const initialState = users
        const action = { type: 'users/unknown' }
        const newState = usersReducer(initialState, action)

        expect(newState).toEqual(initialState)
    })
})
