/**
 * Test Scenarios
 * 
 * - Header component
 *   - should displays a user dropdown with logout button when the user is authenticated
 *   - should displays a login button when the user is not authenticated
 */
import { cleanup, render, screen } from '@testing-library/react'
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { generateUser } from '../../utils/testUtils'
import Header from './Header'

vi.mock('react-redux', () => ({
    useSelector: vi.fn(),
    useDispatch: vi.fn(),
}))

describe('Header Component', () => {
    afterEach(() => {
        cleanup()
    })
    it('should displays a user dropdown with logout button when the user is authenticated', () => {
        useSelector.mockReturnValue(generateUser())

        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        expect(screen.getByText('DiskusiYUK')).toBeTruthy()

        expect(screen.getByText('Leaderboard')).toBeTruthy()

        expect(screen.getByText('Logout')).toBeTruthy()
    })

    it('should displays a login button when the user is not authenticated', () => {
        useSelector.mockReturnValue(null)

        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        expect(screen.queryByText('DiskusiYUK')).toBeTruthy()

        expect(screen.getByText('Leaderboard')).toBeTruthy()

        expect(screen.getByText('Login')).toBeTruthy()
    })
})
