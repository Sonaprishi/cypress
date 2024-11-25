

describe("Edit Profile", () => {
    beforeEach(() => {
      cy.visit("https://procurengine.com/aspl/");
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    
      cy.get('#username').type("priya.chauhan@agileapt.com"); 
      cy.get("#password").type("Vv@1234");
      cy.get(".col-sm-8 > .btn").click();  

 
     });
    it("Usr logIN Page", () => {
      cy.get('.dropdown-toggle > .fa').trigger("mouseover");
      cy.get('.dropdown-menu > :nth-child(1) > a').should("be.visible").click()
      cy.get('#frmprofile > .form-body > :nth-child(1) > :nth-child(1) > .form-group > .col-md-9').should("be.visible");
      cy.get('#usermobileno').should("be.visible").should("not.be.disabled");
      cy.get('#userEmailID').should("be.visible");

      cy.get('#userdesignation').should("be.visible").should("not.be.disabled");
      cy.get('#ddlpreferredTime').select("Asia/Calcutta");
      cy.get('#frmprofile > .form-actions > :nth-child(1) > :nth-child(1) > .row > .col-md-offset-11 > .btn').click();
    
      
    });
   
    
    
  });
  