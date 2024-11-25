
import 'cypress-file-upload';
describe("Edit Profile", () => {
    beforeEach(() => {
      cy.visit("https://pev3qaapp.azurewebsites.net/aspl/");
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    
      cy.get('#username').type("priya.chauhan@agileapt.com"); 
      cy.get("#password").type("4321");
      cy.get('.col-sm-8 > .btn').click();  
     

 
     });
    it("Usr RFQ", () => {
        cy.get('.sidebar-toggler-wrapper').should("be.visible").click();
        cy.get('#ulMain > :nth-child(3) > [href="javascript:;"]').should("be.visible").click();
       
        cy.get('#MenuHeader1 > :nth-child(9) > a').should("be.visible").click();

        //step1

        cy.get('#txtrfqSubject').type("Close bid");
        //calendar

        cy.get('.col-md-4 > .input-group > .input-group-btn > #btncal').click("");
        cy.get('[style="display: block; top: 422.508px; left: 368.514px;"] > .datetimepicker-days > .table-condensed > tbody > :nth-child(5) > :nth-child(4)').click("");
        cy.get('[style="display: block; top: 422.509px; left: 380.514px;"] > .datetimepicker-hours > .table-condensed > tbody > tr > td > .active').click("");
        cy.get('[style="display: block; top: 422.509px; left: 380.514px;"] > .datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(12)').click("");
        cy.get('.has-error > .col-md-3 > .input-group > .input-group-btn > .btn > .fa').click();
        cy.get('#txtrfqdescription').type("type an  error ");
        cy.get('#file1').click().wait(6000);


        //bid open date

        // cy.get('div.col-md-3 > .input-group > .input-group-btn > #btncal').click();
        // cy.get('[style="display: block; top: 614.426px; left: 748.187px;"] > .datetimepicker-days > .table-condensed > tbody > :nth-child(6) > :nth-child(7)').click();
        // cy.get('[style="display: block; top: 614.426px; left: 760.187px;"] > .datetimepicker-hours > .table-condensed > tbody > tr > td > :nth-child(14)').click();
        // cy.get('[style="display: block; top: 614.426px; left: 760.187px;"] > .datetimepicker-minutes > .table-condensed > tbody > tr > td > .active').click();
        

        //approver

        cy.get('#txtApprover').type("ABC{Enter}");
        cy.get(':nth-child(4) > .col-md-1 > #Addbtn1 > .fa').click();

        cy.get('.row > .col-md-offset-5 > .yellow').click();

        
       
    });
   
    
    
  });
  