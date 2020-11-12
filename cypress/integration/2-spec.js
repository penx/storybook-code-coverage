/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/");
});

it("when the users clicks Two then the value is 2", function () {
  cy.contains("Users").click();
  cy.contains("Users page").should("be.visible");
});

it("when the users clicks Two then the value is 2", function () {
  cy.contains("Two").click();
  cy.contains("Value is 2").should("be.visible");
});
