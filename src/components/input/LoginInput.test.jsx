import '@testing-library/jest-dom/vitest'

import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"

import LoginInput from "./LoginInput"


describe("LoginInput component", () => {
    afterEach(() => {
        cleanup()
    })

    it("should email value correct", async () => {
        const emailValue = "test@mail.com"
        render(<LoginInput login={() => { }} />)
        const email = screen.getByPlaceholderText("Email")
        await userEvent.type(email, emailValue)
        expect(email).toHaveValue(emailValue)
    })

    it("should password value correct", async () => {
        const passwordValue = "1234567"
        render(<LoginInput login={() => { }} />)
        const password = screen.getByPlaceholderText("Password")
        await userEvent.type(password, passwordValue)
        expect(password).toHaveValue(passwordValue)
    })
    it("should call login() and disable button when login button is clicked", async () => {
        const login = vi.fn()
        render(<LoginInput login={login} />)
        const password = screen.getByPlaceholderText("Password")
        const email = screen.getByPlaceholderText("Email")
        await userEvent.type(email, "test@gmail.com")
        await userEvent.type(password, "1234567")
        const loginButton = screen.getByRole("button", { name: "Login" })
        await userEvent.click(loginButton)
        expect(login).toBeCalled()
        expect(loginButton).toBeDisabled()
    })
})
