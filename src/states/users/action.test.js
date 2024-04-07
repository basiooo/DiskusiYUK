import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { usersAPI } from '../../api/users'
import { generateUser } from '../../utils/testUtils'
import { usersActions, usersThunks } from './action'

const fakeUsersResponseSuccess = {
    "users": Array.from({ length: 3 }, () => generateUser())
    ,
    "status": "success",
    "message": "ok"
}

const fakeUsersResponseFailed = {
    "users": [],
    "status": "failed",
    "message": "Ups, something went wrong"
}

describe("usersThunks.asyncGetUsers", () => {
    beforeEach(() => {
        usersAPI._getUsers = usersAPI.getUsers
    })
    afterEach(() => {
        usersAPI.ggetUsers = usersAPI._getUsers
        delete usersAPI._getUsers
    })

    it("should dispatch action correctly when data fetching success'", async () => {
        usersAPI.getUsers = () => Promise.resolve(fakeUsersResponseSuccess)

        const dispatch = vi.fn()

        await usersThunks.asyncGetUsers()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(showLoading())
        expect(dispatch).toHaveBeenCalledWith(usersActions.set(fakeUsersResponseSuccess.users))
        expect(dispatch).toHaveBeenCalledWith(hideLoading())
    })

    it("should dispatch action correctly when data fetching failed'", async () => {
        usersAPI.getUsers = () => Promise.resolve(fakeUsersResponseFailed)

        const dispatch = vi.fn()

        await usersThunks.asyncGetUsers()(dispatch)

        expect(dispatch).not.toBeCalledWith(usersActions.set(fakeUsersResponseSuccess.users))
        expect(dispatch).toHaveBeenCalledWith(showLoading())
        expect(dispatch).toHaveBeenCalledWith(hideLoading())
    })
})