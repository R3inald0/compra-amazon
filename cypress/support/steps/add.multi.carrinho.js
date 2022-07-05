/// <reference types="cypress" />
/* global Given, When, Then, And */

Given('Estou logado na amazon', () => {
   cy.loginAmazon()
})

When('Adicionar multiplos produtos ao carrinho', () => {
    cy.get('#twotabsearchtextbox').type('apple 13{enter}',{force:true})
      .get('[data-asin] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal > .a-section > .s-image')
        .first().click()
        .get('#add-to-cart-button').click()
        .get('#attachSiNoCoverage').click()
        
})

Then('O preço final do meu carrinho é a soma itens adicionados', () => {
    cy.get('#sw-subtotal-item-count').then((element) => {
        expect(element.text().replace('\n', '').replace(' ','')).to.equal('R$5.479,00')
        

})

})