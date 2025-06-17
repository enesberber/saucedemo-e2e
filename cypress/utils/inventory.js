



const sortBy = (option) => {
    cy.get('[data-test="product-sort-container"]').select(option)
}



const goToCart = () => {
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
}

export default {
    sortBy,
    goToCart
}