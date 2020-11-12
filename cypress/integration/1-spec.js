/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/");
});

it("when the users clicks One then the value is 1", function () {
  cy.contains('One').click();
  cy.contains('Value is 1').should('be.visible');
});
