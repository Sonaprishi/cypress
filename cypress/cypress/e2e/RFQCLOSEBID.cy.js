describe("Edit Profile", () => {
    beforeEach(() => {
      cy.visit("https://procurengine.com/aspl/");
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
       
        cy.get('#MenuHeader1 > :nth-child(10) > a').should("be.visible").click();

        //step1

        cy.get('#txtrfqSubject').type("Close bid");
        cy.get('#txtrfqdescription').type("IBM Rational Test Workbench provides software testing tools to support a DevOps approach: API testing, functional UI testing, performance testing and service virtualization.")
        //calendar

        cy.get(':nth-child(2) > :nth-child(2) > .col-md-3 > .input-group > .input-group-btn > .btn > .fa').click("");
        cy.get('[style="display: block; top: 423.2px; left: 747.987px;"] > .datetimepicker-days > .table-condensed > tbody > :nth-child(3) > :nth-child(5)').click("");
        cy.get('[style="display: block; top: 423.2px; left: 759.987px;"] > .datetimepicker-hours > .table-condensed > tbody > tr > td > :nth-child(14)').click("");
        cy.get('[style="display: block; top: 423.2px; left: 759.987px;"] > .datetimepicker-minutes > .table-condensed > tbody > tr > td > .active').click("");
  
      
        cy.get('#file1').click().wait(6000);


        //bid open date

        // cy.get('div.col-md-3 > .input-group > .input-group-btn > #btncal').click();
        // cy.get('[style="display: block; top: 614.426px; left: 748.187px;"] > .datetimepicker-days > .table-condensed > tbody > :nth-child(6) > :nth-child(7)').click();
        // cy.get('[style="display: block; top: 614.426px; left: 760.187px;"] > .datetimepicker-hours > .table-condensed > tbody > tr > td > :nth-child(14)').click();
        // cy.get('[style="display: block; top: 614.426px; left: 760.187px;"] > .datetimepicker-minutes > .table-condensed > tbody > tr > td > .active').click();
        

        //approver

        cy.get('#txtApprover').type("Ankur{Enter}");
        cy.get(':nth-child(4) > .col-md-1 > #Addbtn1 > .fa').click();

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
        

        cy.get('.row > .col-md-offset-5 > .yellow').click();


        //step4

        cy.get('#txtVendorGroup').type("demo");
        cy.get('.col-md-8 > .typeahead > .active > a').click();
        cy.get('#chkvender289').click();
        cy.get('#chkvender460').click();
        cy.get('#chkvender474').click();
        cy.get('#chkvender462').should("be.visible").click();

        //QA vendor

        //cy.get('#chkvender6269').click();
        //cy.get('#chkvender6270').click();
        cy.get('.row > .col-md-offset-5 > .green').click();

        //preview
        cy.get('.col-md-offset-11 > .green').click();


        //popup

        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click();

        
       
    });
   
    
    
  });
  