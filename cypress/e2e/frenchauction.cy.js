
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
    it("Usr RA", () => {
        cy.get('.sidebar-toggler-wrapper > .sidebar-toggler').click();
        cy.get(':nth-child(3) > [href="javascript:;"] > .title').click();
        cy.get('#MenuHeader1 > :nth-child(8) > a').click();
        cy.get('#txtBidSubject').should("not.be.disabled").should("be.visible").type("Automation");
        cy.get('#txtbiddescription').should("not.be.disabled").should("be.visible").type("Automation");
        cy.get('#txtBidDuration').type("20")
        cy.get('#btncal > .fa').click();                         
        cy.get(':nth-child(4) > .active').click();                                                            //date
        cy.get('td > :nth-child(16)').click();
        cy.get('.datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(12)').click();      //time
        cy.get('#file1').click().wait(6000);
        cy.get('#txtApprover').type("ABC{Enter}");
        cy.get('.col-md-offset-5 > .btn-success').click();
      
       //step2

       cy.get('#txtshortname').type("BACD");
       cy.get('#txtquantitiy').type("200");
       cy.get('#txtUOM').type("Package{Enter}");
       cy.get('#txtminquantitiy').type("20");
       cy.get('#txtmaxquantitiy').type("200");
       cy.get('#txtCeilingPrice').type("50000");
       cy.get('#txtminimumdecreament').type("1000");
       cy.get('#add_or').click();
       cy.get('.col-md-offset-5 > .btn-success').click();


       //Invitevendor

       cy.get('#txtVendorGroup').type("demo{Enter}");
       cy.get('#chkvender5219').click();
       cy.get('#chkvender289').click();
       cy.get('.col-md-offset-5 > .green').click()


       //Preview

       cy.get('#btnsubmit').click();


    });
   
    
    
  });
  