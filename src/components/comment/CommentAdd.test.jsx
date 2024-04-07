import "@testing-library/jest-dom/vitest"

import { cleanup, render, screen } from "@testing-library/react"
import { useSelector } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { afterEach, describe, expect, it, vi } from "vitest"

import { generateUser } from "../../utils/testUtils"
import CommentAdd from "./CommentAdd"

vi.mock("react-redux", () => ({
    useSelector: vi.fn(),
}))

describe("CommentAdd component", () => {
    afterEach(() => {
        cleanup()
    })

    it("should displays a login button when the user is not authenticated", async () => {
        useSelector.mockReturnValue(null)
        render(
            <BrowserRouter>
                <CommentAdd onComment={() => { }} />
            </BrowserRouter>,
        )
        const sendButton = screen.queryByText("Send")
        expect(sendButton).not.toBeInTheDocument()
        const login = screen.queryByText("Login")
        expect(login).toBeInTheDocument()
    })
    it("should displays a comment input when the user is authenticated", async () => {
        useSelector.mockReturnValue(generateUser())
        render(
            <BrowserRouter>
                <CommentAdd onComment={() => { }} />
            </BrowserRouter>,
        )
        const login = screen.queryByText("Login")
        expect(login).not.toBeInTheDocument()
        const sendButton = screen.queryByText("Send")
        expect(sendButton).toBeInTheDocument()
    })
})
