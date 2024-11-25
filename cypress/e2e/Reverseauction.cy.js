
import 'cypress-file-upload';
describe("Edit Profile", () => {
    beforeEach(() => {
      //cy.visit("https://procurengine.com//aspl/");
      cy.visit("https://peqaapp.azurewebsites.net/aspl");
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    
      cy.get('#username').should("not.be.disabled").type("priya.chauhan@agileapt.com"); 
      cy.get("#password").should("not.be.disabled").type("Vv@1234");
      cy.get('.col-sm-8 > .btn').click();  

 
     });
    it("Usr RA", () => {
        cy.get('.sidebar-toggler-wrapper > .sidebar-toggler').click();
        cy.get('#ulMain > :nth-child(3) > [href="javascript:;"]').click();
        cy.get('#MenuHeader1 > :nth-child(5) > a').should("be.visible").click()
        cy.get('#txtBidSubject').type("RA Stagger testing ");
        cy.get('#txtbiddescription').type("shhs");
        //calender

        cy.get('.col-md-4 > .input-group > .input-group-btn > #btncal > .fa').click();
        cy.get(':nth-child(6) > :nth-child(7)').click();
        cy.get('.datetimepicker-hours > .table-condensed > tbody > tr > td > .active').click();
        cy.get('.datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(7)').click();
       
        cy.get('#txtBidDuration').type("20")
        // cy.get('#dropCurrency');
        // cy.get('#file2')



        //allitemsin one go or staggere option

        // cy.get('#ddlbidclosetype').click();//.select("Stagger at:Item level")
        //cy.get('#txtConversionRate').click();

        cy.get('#file1').click().wait(6000);
        cy.get('#txtApprover').type("Priya Chauhan{Enter}");
        cy.get('.col-md-offset-5 > .btn-success').click();

        //step2

        cy.get('#txtshortname').type("Demo A");
        cy.get('#txtquantitiy').type("20");
        cy.get('#txtUOM').type("package{Enter}");
        cy.get('#txtCeilingPrice').type("30000");
        cy.get('#txtminimumdecreament').type("1000");
        cy.get('#add_or').click();
       


        //item2
        // cy.get('#txtshortname').type("Demo B");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("25000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#add_or').click();


        // //stagger items



        // cy.get('#txtshortname').type("Demo B");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("30000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#add_or').click();


        // cy.get('#txtshortname').type("Demo B");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("35000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#add_or').click();

        // cy.get('#txtshortname').type("Demo B");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("30000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#add_or').click();

        // cy.get('#txtshortname').type("Demo d");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("40000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#add_or').click();

        // cy.get('#txtshortname').type("Demo e");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("40000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#add_or').click();

        // cy.get('#txtshortname').type("Demo f");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("45000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#add_or').click();

        // cy.get('#txtshortname').type("Demo g");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("45000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#add_or').click();

        // cy.get('#txtshortname').type("Demo i");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("50000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#add_or').click();

        // cy.get('#txtshortname').type("Demo j");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#add_or').click();

     

        //itemC

        cy.get('#txtshortname').type("Demo C");
        cy.get('#txtquantitiy').type("20");
        cy.get('#txtUOM').type("package{Enter}");
        cy.get('#txtCeilingPrice').type("20000");
        cy.get('#txtminimumdecreament').type("1000");
        cy.get('#add_or').click();
        cy.get('.col-md-offset-5 > .btn-success').click();




        //step3

        
        

        //invite vendors

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
  