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
        cy.get('#ulMain > :nth-child(3) > [href="javascript:;"]').click();
        cy.get('#MenuHeader1 > :nth-child(4) > a').should("be.visible").click()
        

        //step 1

        cy.get('#txtBidSubject').type("testing japanese");
        cy.get('#txtbiddescription').type("abcds");
        cy.get('#btncal').click();   // calender
        cy.get('.col-md-4 > .input-group > .input-group-btn > #btncal > .fa').click();
        cy.get(':nth-child(6) > :nth-child(7)').click();
        cy.get('.datetimepicker-hours > .table-condensed > tbody > tr > td > .active').click();
        cy.get('.datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(7)').click();

        cy.get('#ddlAuctiontype').select("Japanese");
        cy.get('#txtApprover').type("ABC{Enter}");

        cy.get('#dropCurrency').select("INR");
        cy.get('#txtConversionRate').type("1");
        cy.get('#file1').click().wait(6000);
        cy.get('.col-md-offset-5 > .btn-success').click();

        //Step2


        cy.get('#txtshortname').type("Demo A");
        cy.get('#txtquantitiy').type("20");
        cy.get('#txtUOM').type("package{Enter}");
        cy.get('#txtCeilingPrice').type("30000");
        cy.get('#txtminimumdecreament').type("1000");
        cy.get('#add_or').click();
       
        cy.get('#txtVendorGroup').type("demo{Enter}");

        // Prod vedor

        // cy.get('#chkvender460').click();
        // cy.get('#chkvender289').click();
        // cy.get('#chkvender462').click();

        //QA vendor 

        cy.get('#chkvender1481').click();
        cy.get('#chkvender141').click();
        cy.get('#chkvender707').click();



        cy.get('.row > .col-md-offset-5 > .green').click();

        cy.get('#btnsubmit').click();

        //cy.get('#btnbidapproversamesubmit').click();
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click();



       
    });
   
    
    
  });
  