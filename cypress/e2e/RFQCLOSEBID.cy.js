
import 'cypress-file-upload';
describe("Edit Profile", () => {
    beforeEach(() => {
      cy.visit("https://peqaapp.azurewebsites.net/aspl");
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    
      cy.get('#username').type("priya.chauhan@agileapt.com"); 
      cy.get("#password").type("Vv@1234");
      cy.get('.col-sm-8 > .btn').click();  
     

 
     });
    it("Usr RFQ", () => {
        cy.get('.sidebar-toggler-wrapper').should("be.visible").click();
        cy.get('#ulMain > :nth-child(3) > [href="javascript:;"]').should("be.visible").click();
       
        cy.get('#MenuHeader1 > :nth-child(9) > a').should("be.visible").click();

        //step1

        cy.get('#txtrfqSubject').type("Close bid");
        //calendar

        cy.get('.col-md-3 > .input-group > .input-group-btn > .btn').click();
        cy.get('[style="left: 663.413px; display: block; top: 430.7px;"] > .datetimepicker-days > .table-condensed > tbody > :nth-child(6) > :nth-child(6)').click();
        cy.get('[style="left: 672.438px; display: block; top: 430.7px;"] > .datetimepicker-hours > .table-condensed > tbody > tr > td > :nth-child(20)').click();
        cy.get('[style="left: 672.438px; display: block; top: 430.7px;"] > .datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(12)').click();
        cy.get('.has-error > .col-md-3 > .input-group > .input-group-btn > .btn > .fa').click();
        cy.get('#txtrfqdescription').type("type an  error ");
        cy.get('#file1').click().wait(6000);


        //bid open date

        // cy.get('div.col-md-3 > .input-group > .input-group-btn > #btncal').click();
        // cy.get('[style="display: block; top: 614.426px; left: 748.187px;"] > .datetimepicker-days > .table-condensed > tbody > :nth-child(6) > :nth-child(7)').click();
        // cy.get('[style="display: block; top: 614.426px; left: 760.187px;"] > .datetimepicker-hours > .table-condensed > tbody > tr > td > :nth-child(14)').click();
        // cy.get('[style="display: block; top: 614.426px; left: 760.187px;"] > .datetimepicker-minutes > .table-condensed > tbody > tr > td > .active').click();
        

        //approver

         
        cy.get('#file1').click().wait(8000);
        
       
     
        cy.get('#txtApprover').type("priya chauhan");
        cy.get('.typeahead > .active > a').click();
        cy.get(':nth-child(7) > :nth-child(1) > :nth-child(4) > .col-md-1 > #Addbtn1 > .fa').click();
        cy.get('.row > .col-md-offset-5 > .yellow').click();


        //step2 Items/Services

        cy.get('#txtshortname').should("be.visible").should("not.be.disabled").type("GHIJKLMNOPQRs");
        cy.get('#txtbiddescriptionP').should("be.visible").should("not.be.disabled").type("GHIJKLMNOPQRs");
        cy.get('#txtquantitiy').should("be.visible").should("not.be.disabled").type("65");
        cy.get('#txtUOM').should("be.visible").should("not.be.disabled").type("Number{Enter}");
        cy.get('#txtedelivery').should("be.visible").should("not.be.disabled").type("Noida");
        cy.get('#add_or').click();
        cy.get('.row > .col-md-offset-5 > .yellow').click();
       


        //step 3

        cy.get(':nth-child(1) > .panel-heading > .panel-title > .accordion-toggle').click();
        cy.get('#chkTerms18').click();
        cy.get('#chkTerms3').click();
        cy.get('#chkTerms4').click();
        cy.get('#chkTerms6').click();
        cy.get('#chkTerms8').click();
        cy.get('#chkTerms14').click();
        cy.get('#chkTerms16').click();
        cy.get('#chkTerms17').click();

        cy.get('.row > .col-md-offset-5 > .yellow').click();


        //step4

        cy.get('#txtVendorGroup').type("demo");
        cy.get('.col-md-8 > .typeahead > .active > a').click();
        cy.get('#chkvender460').click();
        cy.get('#chkvender289').click();
        cy.get('#chkvender474').click();
        cy.get('.row > .col-md-offset-5 > .green').click();

        //preview
        cy.get('.col-md-offset-11 > .green').click();


        //popup

        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click();


        
       
    });
   
    
    
  });
  