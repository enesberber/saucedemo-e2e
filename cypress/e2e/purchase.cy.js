import headerAndFooter from '../utils/headerAndFooter'
import {fillCheckoutDetails,  completePurchase} from '../utils/checkout'
import {sortBy,goToCart} from '../utils/inventory'
import login from '../utils/loginPage'
import credentials from '../fixtures/credentials.json'
describe('Product Purchase Flow', () => {


  it('should complete the product purchase flow as described', () => {
    // Step 1: Login
    login(credentials.standard)
    // Assert header and footer
    headerAndFooter()

    // Step 2: Sort Price (low to high) and add last item
    sortBy('lohi')

    // Step 3: Add last item (by price)
    cy.sel('inventory-item').last().as('lowPriceItem')

    cy.get('@lowPriceItem').find('button').click()
    cy.get('@lowPriceItem').find('.inventory_item_name').invoke('text').then((lowName) => {
    cy.log('Low Price Item Name:', lowName.trim())
    
    
    // Step 4: Sort Name A-Z and add select the top-right product item
    sortBy('az')
    
    cy.sel('inventory-item').eq(1).as('azTopRightItem')

    cy.get('@azTopRightItem').find('button').click()
    cy.get('@azTopRightItem').find('.inventory_item_name').invoke('text').then((azName) => {

    // Step 5: Go to cart
    goToCart()
    
    cy.get('.cart_item').should('have.length', 2)

    

    // Step 6: Proceed to checkout    
    fillCheckoutDetails({
      firstName: 'John',     //The data is hardcoded for simplicity , 
      lastName: 'Doe',       //but you can use fixtures or environment variables for dynamic data like  usernames
      postalCode: '12345'
    })


    // Step 7: Assert both purchase items are mathching with the selected items
    cy.sel('inventory-item-name').then(($items) => {
          const cartTexts = [...$items].map(i => i.innerText)

          
          // Verify both expected items are in cart
            const expectedItems = [lowName.trim(), azName.trim()]
            expectedItems.forEach((expected) => {
            const found = cartTexts.some(text => text.includes(expected))
            expect(found, `Cart should contain: "${expected}"`).to.be.true
          })
        })

    // Step 8: Complete purchase
    completePurchase()
  })
})

})
  })
