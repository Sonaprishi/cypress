
import 'cypress-file-upload';
describe("Edit Profile", () => {
    beforeEach(() => {
      cy.visit("https://procurengine.com/aspl/");
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    
      cy.get('#username').should("not.be.disabled").type("priya.chauhan@agileapt.com"); 
      cy.get("#password").should("not.be.disabled").type("1234");
      cy.get('.col-sm-8 > .btn').click();  

 
     });
    it("manageopen bid", () => {
       
        cy.get('.sidebar-toggler-wrapper > .sidebar-toggler').click();
        cy.get(':nth-child(4) > [href="javascript:;"] > .title').click();
        cy.get('#MenuHeader2 > :nth-child(1) > a').click();
        cy.get('#txtbid').should("be.visible").should("not.be.disabled").type("demo");
        cy.get('.typeahead > .active > a').click();
        cy.get('#litab6 > a').click();
        cy.get('#litab7 > a').click();
        cy.get('#litab8 > a').click();
        cy.get('#txtpreprice0').type("200000000");
        cy.get('#btnprebid').click();
    });
    
    
    
  });
  