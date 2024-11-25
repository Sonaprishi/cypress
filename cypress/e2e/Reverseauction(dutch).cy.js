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

        cy.get('#txtBidSubject').type("abcsd");
        cy.get('#txtbiddescription').type("abcds");
        cy.get('#btncal').click();   // calender
        cy.get(':nth-child(5) > .active').click();
        cy.get('.datetimepicker-hours > .table-condensed > tbody > tr > td > :nth-child(12)').click();
        cy.get('.datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(7)').click();

        cy.get('#ddlAuctiontype').select("Dutch(RA)");
        cy.get('#txtApprover').type("ABC{Enter}");

        cy.get('#dropCurrency').select("INR");
        cy.get('#txtConversionRate').type("1");
        cy.get('#file1').click().wait(6000);
        cy.get('.col-md-offset-5 > .btn-success').click();

        //Step2


        cy.get('#txtshortname').type("abcdf")



       
    });
   
    
    
  });
  