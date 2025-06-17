// cypress/support/checkout.js

const fillCheckoutDetails=({ firstName, lastName, postalCode })=> {
  cy.sel("checkout").click()
  cy.sel("firstName").type(firstName)
  cy.sel("lastName").type(lastName)
  cy.sel("postalCode").type(postalCode)
  cy.sel("continue").click()
}



const completePurchase = ()=> {
  cy.sel("finish").click()
  cy.url().should('include', 'checkout-complete')
  cy.sel('complete-header').should('have.text','Thank you for your order!')
}



export default {
  fillCheckoutDetails,
  completePurchase
}