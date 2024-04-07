import { faker } from "@faker-js/faker"

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login')
  })

  it('should display login page correctly', () => {
    cy.get('#email').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  })

  it('should prevent login when email and password are empty', () => {
    cy.get('button[type="submit"]').click()
    cy.url().should("eq", "http://localhost:5173/login")
  })

  it('should prevent login when invalid email format', () => {
    cy.get('#email').type("test")
    cy.get('#password').type("test123")
    cy.get('button[type="submit"]').click()
    cy.url().should("eq", "http://localhost:5173/login")
  })

  it('should display toast when login email and password are wrong', () => {
    cy.get('#email').type(`${faker.lorem.word(10)}@gmail.com`)
    cy.get('#password').type(faker.string.alphanumeric(10))
    cy.get('button[type="submit"]').click()
    cy.get('div[aria-live="polite"]').should('have.text', "Error: email or password is wrong")
  })

  it('should redirect to home when login email and password are correct', () => {
    cy.get('#email').type("user@user.com")
    cy.get('#password').type("user@user.com")
    cy.get('button[type="submit"]').click()
    cy.get('div[aria-live="polite"]').should('have.text', "Login success")
    cy.url().should("eq", "http://localhost:5173/")
  })
})

