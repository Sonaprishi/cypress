
import 'cypress-file-upload';
describe("Edit Profile", () => {
    beforeEach(() => {
      cy.visit("https://pev3qaapp.azurewebsites.net/aspl/");
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    
      cy.get('#username').should("not.be.disabled").type("priya.chauhan@agileapt.com"); 
      cy.get("#password").should("not.be.disabled").type("Vv@1234");
      cy.get('.col-sm-8 > .btn').click();  

 
     });
    it("Usr FA", () => {
      var file = "../fixture/example.json"
        cy.get('.sidebar-toggler-wrapper > .sidebar-toggler').click();
        cy.get('#ulMain > :nth-child(3) > [href="javascript:;"]').click();
        cy.get('#MenuHeader1 > :nth-child(4) > a').should("be.visible").click()
        cy.get('#txtBidSubject').should("be.visible").should("not.be.disabled").type("Fa dutch automation");
        cy.get('#txtbiddescription').should("be.visible").should("not.be.disabled").type("Fa dutch automation");
        
        cy.get('#btncal > .fa').click();                                  //calender
        cy.get(':nth-child(6) > :nth-child(7)').click();
       
        cy.get('.datetimepicker-hours > .table-condensed > tbody > tr > td > :nth-child(12)').click();
        cy.get('.datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(3)').click();
        cy.get('#ddlAuctiontype').select("Dutch(RA)");
        cy.get('#file1').click().wait(6000);


       
        cy.get('#txtBidDuration').should("be.visible").should("be.disabled");
        cy.get('#txtApprover').should("be.visible").should("not.be.disabled").type("ABC{Enter}");
        cy.get('.col-md-offset-5 > .btn-success').click();
       

        // //Step 2(Setup parameter)

        cy.get('#txtshortname').should("be.visible").should("not.be.disabled").type("ABCCD");
        cy.get('#txtquantitiy').should("be.visible").should("not.be.disabled").type("49");
        cy.get('#txtUOM').should("be.visible").should("not.be.disabled").type("package{Enter}");
        cy.get('#txtCeilingPrice').should("be.visible").should("not.be.disabled").type("490000");
        cy.get('#txtStartingPrice').should("be.visible").should("not.be.disabled").type("490000");
        cy.get('#txtPriceReductionAmount').should("be.visible").should("not.be.disabled").type("4000")
        
        cy.get('#add_or').click();
        cy.get('.col-md-offset-5 > .btn-success').click();



        // Step3(Invite Vendor)

        cy.get('#txtVendorGroup').should("be.visible").should("not.be.disabled").type("demo{Enter}");
        cy.get('#vList460 > :nth-child(2)').click();
        cy.get('#chkvender460').click();
        cy.get('#vList289 > :nth-child(2)').click();
        cy.get('#chkvender289').click();
        cy.get('.row > .col-md-offset-5 > .green').click();

        //Preview
        cy.get('#btnsubmit').should("be.visible").should('not.be.disabled').click();

        //add approvers

        cy.get('#tblpreBidapprovers1 > tbody > #trAppidPrev1 > :nth-child(1)').should("be.visible");
        cy.get('#tblpreBidapprovers1 > tbody > #trAppidPrev1 > :nth-child(2)').should("be.visible");
        cy.get('#tblpreBidapprovers1 > tbody > #trAppidPrev1 > :nth-child(4)').should("be.visible");
        cy.get('#btnbidapproversamesubmit').should("be.visible").should("not.be.empty").click();
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click();
     });
   
    
    
  });
  