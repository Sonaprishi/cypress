describe("Edit Profile", () => {
    beforeEach(() => {
      cy.visit("https://pev3qaapp.azurewebsites.net/aspl/");
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    
      cy.get('#username').should("not.be.disabled").type("priya.chauhan@agileapt.com"); 
      cy.get("#password").should("not.be.disabled").type("Pc@1234");
      cy.get('.col-sm-8 > .btn').click();  

 
     });
    it("Usr coal", () => {
        cy.get('.sidebar-toggler-wrapper > .sidebar-toggler').click();
        cy.get('#ulMain > :nth-child(3) > [href="javascript:;"]').click();
        cy.get('#MenuHeader1 > :nth-child(7) > a').click();

        //Step1


        cy.get('#txtBidSubject').type("coalauction");
        cy.get('#txtbiddescription').type("vgfyyyyyyyyyyy");
        cy.get('.col-md-4 > .input-group > .input-group-btn > #btncal > .fa').click();    //calender
        cy.get(':nth-child(5) > .active').click();
        cy.get('.datetimepicker-hours > .table-condensed > tbody > tr > td > .active').click();
        cy.get('.datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(12)') .click();
        cy.get('#file1').click().wait(6000);
        cy.get('#txtBidDuration').type("20")
        cy.get('#txtApprover').type("Ankur{Enter}");
        cy.get('.col-md-offset-5 > .btn-success').click();

        //step2

        cy.get('#txtdestinationPort').type("coalauction")
        cy.get('#txtquantitiy').type("575")
        cy.get('#txtUOM').type("package{Enter}");
        cy.get('#txtCeilingPrice').type("9.00");
        cy.get('#txtminimumdecreament').type("1");
        cy.get('#add_or').click();
        cy.get('.col-md-offset-5 > .btn-success').click();

        //Step3

        cy.get('#txtVendorGroup').type("Demo{Enter}");
        cy.get('#chkvender6269').click();
        cy.get('#chkvender6270').click();
        cy.get('.row > .col-md-offset-5 > .green').click();

        //preview

        cy.get('.col-md-offset-11 > .green').click();

        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click();



    });
   
    
    
  });
  