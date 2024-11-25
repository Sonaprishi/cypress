import 'cypress-file-upload';

describe("Edit Profile", () => {
  beforeEach(() => {
    cy.visit("https://peqaapp.azurewebsites.net/aspl");
    Cypress.on("uncaught:exception", () => false);

    // Login
    cy.get('#username').type("priya.chauhan@agileapt.com");
    cy.get("#password").type("Vv@1234");
    cy.get('.col-sm-8 > .btn').click();
  });

  it("User FA", () => {
    // Navigate through menu
    cy.get('.sidebar-toggler-wrapper > .sidebar-toggler').click();
    cy.get('#ulMain > :nth-child(3) > [href="javascript:;"]').click();
    cy.get('#MenuHeader1 > :nth-child(6) > a').click(); // NFA Overview

    // Fill NFA form
    cy.get('#txtTitle').type("test NFA"); // Enter Title
    cy.get('#txtNFADetail').type("NFA Test"); // Enter Details
    cy.get('#txtAmountFrom').type("1"); // Amount From
    cy.get('#txtBudget').type("100000"); // Budget
    cy.get('#dropCurrency').select("INR"); // Select Currency

    // Purchase Organization Dropdown
    cy.get(':nth-child(12) > :nth-child(1) > div.col-md-3').wait(8000);

    //Purchase Group

    cy.get('.col-md-3 > .col-md-10').click()

    // Remarks (Rich Text Editor)
    cy.get('.cke_wysiwyg_frame').then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).type("User is configuring Bid...");
    });

    cy.get('.col-md-offset-5 > .btn-success').click(); // Submit Form

    // NFA Details
    cy.get('#paramremark17').type("Detail 1");

    cy.get('.col-md-offset-5 > .btn-success').click(); // Final Submission

    // Assertions
    cy.get('.col-md-offset-5 > .green').click() 

    cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click();
  });
});