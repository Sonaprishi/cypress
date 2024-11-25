describe("Edit Profile", () => {
    beforeEach(() => {
      cy.visit("https://pev3qaapp.azurewebsites.net/aspl/");
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
      cy.get("#username").type("anupam.aggrwal@example.org"); // login
      cy.get("#password").type("4321");
      cy.get(".col-sm-8 > .btn").click();
    });
    it("Checking Contact details", () => {
      cy.wait(1000);
      cy.get('.sidebar-toggler-wrapper > .sidebar-toggler').should("be.visible").click();
      cy.get(':nth-child(6) > [href="javascript:;"] > .title').click();
      cy.get('#MenuHeader4 > :nth-child(1) > a').click();
    
      cy.get('#ddlBidtype').select("Forward Auction");
      cy.get('#txtbidsubject').should("be.visible");
      cy.get('#ddlBidFor').select("English");
      cy.get('#txtFromDate').click();
      cy.get('.datepicker-days > .table-condensed > thead > :nth-child(1) > .prev').click();
      cy.get('.datepicker-days > .table-condensed > thead > :nth-child(1) > .prev').click();
      cy.get('tbody > :nth-child(1) > :nth-child(4)').click();
      cy.get('#txtToDate').click();
      cy.get(':nth-child(4) > :nth-child(6)').click();
      cy.get('#ddlbidstatus').select("Not forwarded");
      cy.get('#ddlconfiguredby').should("be.visible");
      cy.get('#ddlreporttype').select("Bid Saving Summary");
      cy.get('#btnSubject').click();
      cy.get('.odd > .sorting_1 > a').click();
      cy.get('.page-footer-inner').should("be.visible");
      
    });
    
  });
  