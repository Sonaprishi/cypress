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
    cy.get('#ddlPurchaseOrg').click();
    cy.get('#ddlPurchaseOrg option').contains('Option Name').click(); // Update as per actual option name

    // Remarks (Rich Text Editor)
    cy.get('.cke_wysiwyg_frame').then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).type("User is configuring Bid...");
    });

    cy.get('.col-md-offset-5 > .btn-success').click(); // Submit Form

    // NFA Details
    cy.get('#paramremark5').type("Detail 1");
    cy.get('#paramremark6').type("Detail 2");
    cy.get('#ddlNFAParam').select("Question 3");
    cy.get('#addques').click();
    cy.get('#paramremark32').type("Additional remarks");

    cy.get('.col-md-offset-5 > .btn-success').click(); // Final Submission

    // Assertions
    cy.get('.notification-success').should('be.visible'); // Verify success message
  });
});
