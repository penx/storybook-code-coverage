/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/')
})

it("has a visible header", function () {
  cy.get(".header").should("be.visible")
  .and('have.text', 'Example Application');
});
