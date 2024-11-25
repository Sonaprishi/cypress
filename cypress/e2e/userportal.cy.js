
import 'cypress-file-upload';
describe("Edit Profile", () => {
    beforeEach(() => {
      cy.visit("https://pev3qaapp.azurewebsites.net/aspl/");
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    
      cy.get('#username').should("not.be.disabled").type("priya.chauhan@agileapt.com"); 
      cy.get("#password").should("not.be.disabled").type("1234");
      cy.get('.col-sm-8 > .btn').click();  

 
     });
    it("User User portal", () => {
        cy.get('#lblTodayBidCount').click();
        cy.get('#lblopenRFQCount').click();
        cy.get('#lblNotForwardedBidCount').click();
        cy.get('#lblNotFwRFQCount').click();
        cy.get('#lblForwardedBidCount').click();
        cy.get('#lblFwRFQCount').click();
        cy.get('#lblAwardedBidCount').click();
        cy.get('#lblAwRFQCount').click();
        cy.get('.tooltips').click();
        cy.get('#HelpModal > .modal-dialog > .portlet > .portlet-title > .tools > .close').click();
        cy.get('.sidebar-toggler-wrapper > .sidebar-toggler').click();
        cy.get(':nth-child(3) > [href="javascript:;"] > .title').click();
        cy.get(':nth-child(4) > [href="javascript:;"] > .title').click();
        cy.get(':nth-child(4) > [href="javascript:;"] > .title').click();
        cy.get(':nth-child(6) > [href="javascript:;"] > .title').click();
        cy.get('.dropdown-toggle').click();
    });
    it("pendingBid Details", () => {
        cy.get('#UlPendingActivity > :nth-child(1) > .col1 > .cont > .cont-col2').click();
        cy.get('.col-md-offset-5 > .btn-success').click();
    })
   
    
    
  });
  