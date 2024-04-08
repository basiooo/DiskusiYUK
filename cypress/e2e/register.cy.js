/**
 * Test Scenarios
 * 
 * - Register spec
 *   - should display register page correctly
 *   - should prevent register when name, email and password are empty
 *   - should prevent register when invalid email format
 *   - should redirect to login page when success register
 */
import { faker } from "@faker-js/faker"
import { v4 as uuidv4 } from 'uuid'
describe('Register spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/register')
    })

    it('should display register page correctly', () => {
        cy.get('#name').should('be.visible')
        cy.get('#email').should('be.visible')
        cy.get('#password').should('be.visible')
        cy.get('button[type="submit"]').should('be.visible')
    })

    it('should prevent register when name, email and password are empty', () => {
        cy.get('button[type="submit"]').click()
        cy.url().should("eq", "http://localhost:5173/register")
    })

    it('should prevent register when invalid email format', () => {
        cy.get('#email').type("test")
        cy.get('#name').type("test 1234")
        cy.get('#password').type("test123")
        cy.get('button[type="submit"]').click()
        cy.url().should("eq", "http://localhost:5173/register")
    })

    it('should redirect to login page when success register', () => {
        cy.get('#name').type(faker.person.fullName())
        cy.get('#email').type(`${uuidv4().replaceAll("-", "")}@gmail.com`)
        cy.get('#password').type(faker.string.alphanumeric(10))
        cy.get('button[type="submit"]').click()
        cy.url().should("eq", "http://localhost:5173/login")
    })
})

