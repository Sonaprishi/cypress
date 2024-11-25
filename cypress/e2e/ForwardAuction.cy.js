
import 'cypress-file-upload';
describe("Edit Profile", () => {
    beforeEach(() => {
      //cy.visit("https://procurengine.com/aspl/");

      cy.visit("https://peqaapp.azurewebsites.net/aspl");
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
        cy.get('#txtBidSubject').should("be.visible").should("not.be.disabled").type("FA automation");
        cy.get('#txtbiddescription').should("be.visible").should("not.be.disabled").type("FA automation");
        cy.get('#btncal').click();
        cy.get(':nth-child(6) > :nth-child(7)').click();
       
        cy.get('.datetimepicker-hours > .table-condensed > tbody > tr > td > :nth-child(12)').click();
        cy.get('.datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(3)').click();
        cy.get('#file1').click().wait(6000);
        cy.get('#txtBidDuration').should("be.visible").should("not.be.disabled").type("10");
        cy.get('#txtApprover').should("be.visible").should("not.be.disabled").type("priya chauhan{Enter}");
        cy.get('.col-md-offset-5 > .btn-success').click();
       

        //Step 2(Setup parameter)

        cy.get('#txtshortname').should("be.visible").should("not.be.disabled").type("demo1");
        cy.get('#txtquantitiy').should("be.visible").should("not.be.disabled").type("49");
        cy.get('#txtUOM').should("be.visible").should("not.be.disabled").type("package{Enter}");
        cy.get('#txtCeilingPrice').should("be.visible").should("not.be.disabled").type("49000");
        cy.get('#txtminimumdecreament').should("be.visible").should("not.be.disabled").type("400");
        
        cy.get('#add_or').click();


        //item 2


        cy.get('#txtshortname').should("be.visible").should("not.be.disabled").type("demo2");
        cy.get('#txtquantitiy').should("be.visible").should("not.be.disabled").type("49");
        cy.get('#txtUOM').should("be.visible").should("not.be.disabled").type("package{Enter}");
        cy.get('#txtCeilingPrice').should("be.visible").should("not.be.disabled").type("40000");
        cy.get('#txtminimumdecreament').should("be.visible").should("not.be.disabled").type("500");
        cy.get('#add_or').click();



        //item 2

        cy.get('#txtshortname').should("be.visible").should("not.be.disabled").type("demo3");
        cy.get('#txtquantitiy').should("be.visible").should("not.be.disabled").type("49");
        cy.get('#txtUOM').should("be.visible").should("not.be.disabled").type("package{Enter}");
        cy.get('#txtCeilingPrice').should("be.visible").should("not.be.disabled").type("50000");
        cy.get('#txtminimumdecreament').should("be.visible").should("not.be.disabled").type("100");
        cy.get('#add_or').click();

        //item3


        cy.get('#txtshortname').should("be.visible").should("not.be.disabled").type("demo4");
        cy.get('#txtquantitiy').should("be.visible").should("not.be.disabled").type("49");
        cy.get('#txtUOM').should("be.visible").should("not.be.disabled").type("package{Enter}");
        cy.get('#txtCeilingPrice').should("be.visible").should("not.be.disabled").type("60000");
        cy.get('#txtminimumdecreament').should("be.visible").should("not.be.disabled").type("600");
        cy.get('#add_or').click();

        //item3

        cy.get('#txtshortname').should("be.visible").should("not.be.disabled").type("demo 3");
        cy.get('#txtquantitiy').should("be.visible").should("not.be.disabled").type("49");
        cy.get('#txtUOM').should("be.visible").should("not.be.disabled").type("package{Enter}");
        cy.get('#txtCeilingPrice').should("be.visible").should("not.be.disabled").type("55000");
        cy.get('#txtminimumdecreament').should("be.visible").should("not.be.disabled").type("1500");
        cy.get('#add_or').click();

        //item4

        cy.get('#txtshortname').should("not.be.disabled").type("demo 4");
        cy.get('#txtquantitiy').should("be.visible").should("not.be.disabled").type("49");
        cy.get('#txtUOM').should("be.visible").should("not.be.disabled").type("package{Enter}");
        cy.get('#txtCeilingPrice').should("be.visible").should("not.be.disabled").type("70000");
        cy.get('#txtminimumdecreament').should("be.visible").should("not.be.disabled").type("1000");
        
        cy.get('#add_or').click();

        
        cy.get('.col-md-offset-5 > .btn-success').click();



        //Step3(Invite Vendor)

        cy.get('#txtVendorGroup').should("be.visible").should("not.be.disabled").type("demo{Enter}");
        // cy.get('#vList460 > :nth-child(2)').click();
        // cy.get('#chkvender460').click();
        // cy.get('#vList289 > :nth-child(2)').click();
        // cy.get('#chkvender289').click();
        // cy.get('.row > .col-md-offset-5 > .green').click();


         //QA vendor 

         cy.get('#chkvender1481').click();
         cy.get('#chkvender141').click();
         cy.get('#chkvender707').click();
 

        //Preview
        cy.get('.row > .col-md-offset-5 > .green').click();

        //add approvers

        // cy.get('#tblpreBidapprovers1 > tbody > #trAppidPrev1 > :nth-child(1)').should("be.visible");
        // cy.get('#tblpreBidapprovers1 > tbody > #trAppidPrev1 > :nth-child(2)').should("be.visible");
        // cy.get('#tblpreBidapprovers1 > tbody > #trAppidPrev1 > :nth-child(4)').should("be.visible");
        // cy.get('#btnbidapproversamesubmit').should("be.visible").should("not.be.empty").click();
        // cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click();

        cy.get('#btnsubmit').click();
        
     });
   
    
    
  });
  