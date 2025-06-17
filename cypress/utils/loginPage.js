import credentials from '../fixtures/credentials.json'

const login = (user) => {
  cy.visit('/')
  cy.get('[data-test="username"]').type(user)
  cy.get('[data-test="password"]').type(credentials.password)
  cy.get('[data-test="login-button"]').click()
}

export default login