import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { authAPI } from '../../api/auth'
import { usersAPI } from '../../api/users'
import { generateUser } from '../../utils/testUtils'
import { authAction, authThunks } from './action'

global.localStorage = {
    removeItem: vi.fn(),
    setItem: vi.fn()
}

const fakeLoginResponseSuccess = {
    status: "success",
    message: "ok",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRpbWFzMiIsIm5hbWUiOiJEaW1hcyBTYXB1dHJhIiwicGhvdG8iOiJodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8_bmFtZT1EaW1hcyBTYXB1dHJhJmJhY2tncm91bmQ9cmFuZG9tIiwiaXNfcGVybWFuZW50IjpmYWxzZSwiaWF0IjoxNjYzODQwNzY0fQ._HrzpinFYX_m9WfvM-lGCdVrnhnaGHhzt1e6eATE1Iw"

}

const fakeLoginResponseFailed = {
    status: "failed",
    message: "Ups, something went wrong",
    token: ""

}

const fakeMeResponseSuccess = {
    status: "success",
    message: "ok",
    user: generateUser()

}

const fakeRegisterResponseSuccess = {
    status: "success",
    message: "User created",
    user: generateUser()

}

const fakeRegisterResponseFailed = {
    status: "failed",
    message: "Ups, something went wrong",
    user: {}

}

describe("authThunks.asyncLogout", () => {
    it("should dispatch action logout success'", async () => {
        const dispatch = vi.fn()
        await authThunks.asyncLogout()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(authAction.unset())
    })
})
describe("authThunks.asyncLogin", () => {
    beforeEach(() => {
        authAPI._login = authAPI.login
        usersAPI._me = usersAPI.me
    })
    afterEach(() => {
        authAPI.login = authAPI._login
        usersAPI.me = usersAPI._me
        delete usersAPI._me
        delete authAPI._login
    })
    it("should dispatch action Login success'", async () => {
        authAPI.login = () => Promise.resolve(fakeLoginResponseSuccess)
        usersAPI.me = () => Promise.resolve(fakeMeResponseSuccess)
        const dispatch = vi.fn()
        await authThunks.asyncLogin({
            email: "test@gmail.com",
            password: "123"
        })(dispatch)

        expect(dispatch).toHaveBeenCalledWith(showLoading())
        expect(dispatch).toHaveBeenCalledWith(authAction.set(fakeMeResponseSuccess.user))
        expect(dispatch).toHaveBeenCalledWith(hideLoading())
    })

    it("should dispatch action Login failed'", async () => {
        authAPI.login = () => Promise.resolve(fakeLoginResponseFailed)
        const dispatch = vi.fn()

        await expect(authThunks.asyncLogin({
            email: "fail@gmail.com", password: "123"
        })(dispatch)).rejects.toThrowError(fakeLoginResponseFailed.message).finally(() => {
            expect(dispatch).toHaveBeenCalledWith(showLoading())
            expect(dispatch).not.toHaveBeenCalledWith(authAction.set(fakeMeResponseSuccess.user))
            expect(dispatch).toHaveBeenCalledWith(hideLoading())
        })
    })
})

describe("authThunks.asyncRegister", () => {
    beforeEach(() => {
        authAPI._register = authAPI.register
    })
    afterEach(() => {
        authAPI.register = authAPI._register
        delete authAPI._register
    })
    it("should dispatch action Register success'", async () => {
        authAPI.register = () => Promise.resolve(fakeRegisterResponseSuccess)
        const dispatch = vi.fn()
        await authThunks.asyncRegister({
            name: "test",
            email: "test@gmail.com",
            password: "123"
        })(dispatch)

        expect(dispatch).toHaveBeenCalledWith(showLoading())
        expect(dispatch).toHaveBeenCalledWith(hideLoading())
    })

    it("should dispatch action Register failed'", async () => {
        authAPI.register = () => Promise.resolve(fakeRegisterResponseFailed)
        const dispatch = vi.fn()

        await expect(authThunks.asyncRegister({
            name: "test", email: "fail@gmail.com", password: "123"
        })(dispatch)).rejects.toThrowError(fakeRegisterResponseFailed.message).finally(() => {
            expect(dispatch).toHaveBeenCalledWith(showLoading())
            expect(dispatch).toHaveBeenCalledWith(hideLoading())
        })
    })
})
