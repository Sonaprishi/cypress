describe("Edit Profile", () => {
    beforeEach(() => {
      cy.visit("https://procurengine.com/aspl/");
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    
      cy.get('#username').should("not.be.disabled").type("priya.chauhan@agileapt.com"); 
      cy.get("#password").should("not.be.disabled").type("Vv@1234");
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
        cy.get('.col-md-4 > .input-group > .input-group-btn > #btncal > .fa').click();
        cy.get(':nth-child(4) > .active').click();
        cy.get('.datetimepicker-hours > .table-condensed > tbody > tr > td > .active').click();
        cy.get('.datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(12)').click();
        //cy.get('.datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(12)').click();      //time
        cy.get('#file1').click().wait(6000);
        cy.get('#txtApprover').type("Ankur{Enter}");
        
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
       cy.get('#chkvender474').click();
       cy.get('#chkvender289').click();

       //cy.get('#chkvender6269').click();
       //cy.get('#chkvender6270').click();
       cy.get('.col-md-offset-5 > .green').click()


       //Preview

       cy.get('#btnsubmit').click();


    });
   
    
    
  });
  