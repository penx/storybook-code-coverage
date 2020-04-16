/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/')
})

it("adds 2 todos", function () {
  cy.get(".App-link").should("be.visible")
  .and('have.text', 'Learn React');
});
