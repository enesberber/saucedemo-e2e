
import credentials from '../fixtures/credentials.json'
import login from '../utils/loginPage'
import headerAndFooter from '../utils/headerAndFooter'

describe('SauceDemo Login Tests', () => {

    it("Login test for standard", () => {  // This user type is the standard user with no issues

      login(credentials.standard)
      cy.url().should('include', '/inventory')
      headerAndFooter()
    })

     it("Login test for locked", () => {   // This user type is designed to simulate a locked account

      login(credentials.locked)
      cy.sel("error").should('contain', 'Epic sadface: Sorry, this user has been locked out.')
    })

     it("tests login for error", () => {    // This user is designed to simulate an error in the system when trying to remove an item from the cart
      login(credentials.error)
      cy.url().should('include', '/inventory')

      let exceptionCaught = false
        cy.on('uncaught:exception', (err) => {
        exceptionCaught = true
        expect(err.message, 'Expected JS error').to.include('Failed to remove item from cart')
        return false // prevent Cypress from failing the test
        })

      cy.sel("add-to-cart-sauce-labs-backpack").click()
      cy.sel("remove-sauce-labs-backpack").click().then(() => {
      expect(exceptionCaught, 'Expected JS error to be thrown').to.be.true
    })
    })

     it("tests login for problem", () => {    // This user type is simulating a problem with the items images

      login(credentials.problem)
      headerAndFooter()
          cy.get('.inventory_item_img img').then(($imgs) => {
          const srcs = [...$imgs].map((img) => img.src)
          const first = srcs[0]
          const allSame = srcs.every((src) => src === first)
          expect(allSame, 'All list view images are the same (bug)').to.be.true
      })
    })

     it("tests login for glitch", () => {     // This user type is simulating a glitch in the system                                        
      login(credentials.glitch)               // You can write a detailed test case like performace testing
    })

     it("tests login for visual", () => {    // This user type is simulating frontend with UI bugs 
      login(credentials.visual)
      cy.url().should('include', '/inventory')
    })

      
    
  })

