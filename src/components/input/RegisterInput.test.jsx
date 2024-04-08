/**
 * Test Scenarios
 * 
 * - RegisterInput component
 *   - should the name value be the same as typed
 *   - should the email value be the same as typed
 *   - should the password value be the same as typed
 *   - should call the register function and disable the register button for some time after the form is submitted.
 */
import '@testing-library/jest-dom/vitest'

import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"

import RegisterInput from "./RegisterInput"


describe("RegisterInput component", () => {
    afterEach(() => {
        cleanup()
    })

    it("should the name value be the same as typed", async () => {
        const NameValue = "Laravelia"
        render(<RegisterInput register={() => { }} />)
        const name = screen.getByPlaceholderText("Name")
        await userEvent.type(name, NameValue)
        expect(name).toHaveValue(NameValue)
    })

    it("should the email value be the same as typed", async () => {
        const emailValue = "test@mail.com"
        render(<RegisterInput register={() => { }} />)
        const email = screen.getByPlaceholderText("Email")
        await userEvent.type(email, emailValue)
        expect(email).toHaveValue(emailValue)
    })

    it("should the password value be the same as typed", async () => {
        const passwordValue = "1234567"
        render(<RegisterInput register={() => { }} />)
        const password = screen.getByPlaceholderText("Password")
        await userEvent.type(password, passwordValue)
        expect(password).toHaveValue(passwordValue)
    })

    it("should call the register function and disable the register button for some time after the form is submitted.", async () => {
        const register = vi.fn()
        render(<RegisterInput register={register} />)
        const password = screen.getByPlaceholderText("Password")
        const email = screen.getByPlaceholderText("Email")
        const name = screen.getByPlaceholderText("Name")
        await userEvent.type(name, "Laravelia")
        await userEvent.type(email, "test@gmail.com")
        await userEvent.type(password, "1234567")
        const registerButton = screen.getByRole("button", { name: "Register" })
        await userEvent.click(registerButton)
        expect(register).toBeCalled()
        expect(registerButton).toBeDisabled()
    })
})
