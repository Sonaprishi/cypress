describe("Edit Profile", () => {
    beforeEach(() => {
      cy.visit("https://procurengine.com/aspl/");
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    
      cy.get('#username').should("not.be.disabled").type("priya.chauhan@agileapt.com"); 
      cy.get("#password").should("not.be.disabled").type("Pc@1234");
      cy.get('.col-sm-8 > .btn').click();  

 
     });
    it("Usr RA", () => {
        cy.get('.sidebar-toggler-wrapper > .sidebar-toggler').click();
        cy.get('#ulMain > :nth-child(3) > [href="javascript:;"]').click();
        cy.get('#MenuHeader1 > :nth-child(4) > a').should("be.visible").click()
        

        //step 1

        cy.get('#txtBidSubject').type("abcsd");
        cy.get('#txtbiddescription').type("abcds");
        //cy.get('#btncal').click();   // calender
        //cy.get(':nth-child(5) > .active').click();
        //cy.get('.datetimepicker-hours > .table-condensed > tbody > tr > td > :nth-child(12)').click();
        //cy.get('.datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(7)').click();
        cy.get('.col-md-4 > .input-group > .input-group-btn > #btncal > .fa').click();
        cy.get('tbody > :nth-child(3) > .active').click();
        cy.get('.datetimepicker-hours > .table-condensed > tbody > tr > td > .active').click();
        cy.get('.datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(12)').click();

        cy.get('#ddlAuctiontype').select("Dutch(FA)");
        cy.get('#txtApprover').type("Ankur{Enter}");

        cy.get('#dropCurrency').select("INR");
        cy.get('#txtConversionRate').type("1");
        cy.get('#file1').click().wait(6000);
        cy.get('.col-md-offset-5 > .btn-success').click();

        //Step2


        cy.get('#txtdestinationPort').type("Fail");
        cy.get('#txtquantitiy').type(20);
        cy.get('#txtUOM').type("Number{Enter}");
        cy.get('#txtCeilingPrice').type(25000);
        cy.get('#txtfloorPrice').type(5000);
        cy.get('#txtPriceReductionAmount').type(500);
        cy.get('#add_or').click();
        cy.get('.col-md-offset-5 > .btn-success').click();

        //step3

        cy.get('#txtVendorGroup').type("demo{Enter}");
        cy.get('#chkvender25751').click();
        cy.get('#chkvender11323').click();
        cy.get('#chkvender11321').click();
        cy.get('#chkvender11322').click();
        cy.get('#chkvender9346').click();
        cy.get('#chkvender8963').click();
        cy.get('#chkvender201').click();

       
        cy.get('.row > .col-md-offset-5 > .green').click();

        cy.get('#btnsubmit').click();
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click();





       
    });
   
    
    
  });
  