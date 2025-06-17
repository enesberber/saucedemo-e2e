
//THis command file is used to define custom Cypress commands
//Where you can use them in your tests to make them more readable and maintainable


Cypress.Commands.add('sel', (dataAttr, subSelector) => {   // Custom command to select elements by data-test attribute
  let selector = `[data-test="${dataAttr}"]`
  if (subSelector) {
    selector += ` ${subSelector}`
  }
  return cy.get(selector)
})



