const headerAndFooter = () => {

cy.get('.app_logo').should('contain', 'Swag Labs')
cy.sel('footer').should('contain', '© 2025 Sauce Labs. All Rights Reserved.')

}
export default headerAndFooter;