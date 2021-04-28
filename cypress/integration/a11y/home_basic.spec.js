/// <reference types="cypress" />

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/ ')
    cy.injectAxe()
  })

  it('Exibe resultado dos testes visualmente', () => {
    cy.get('#search-box-id')
      .type('Macbook Pro')

    cy.checkA11y()
  })
})
