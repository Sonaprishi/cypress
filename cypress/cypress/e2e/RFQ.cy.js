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
        
        cy.get('.sidebar-toggler-wrapper > .sidebar-toggler').click();
        cy.get('#ulMain > :nth-child(3) > [href="javascript:;"]').click();
        cy.get('#MenuHeader1 > :nth-child(3) > a').click();
        cy.get('#txtrfqSubject').should("be.visible").type("RFQ testing for file download in diffferent versions");
        cy.get('#txtRFQReference').should("be.visible").should("be.enabled");
        cy.get('.col-md-3 > .input-group > .input-group-btn > .btn > .fa').click();
        // cy.get('[style="display: block; top: 422.509px; left: 317.108px;"] > .datetimepicker-days > .table-condensed > tbody > :nth-child(5) > :nth-child(6)').should("be.visible").should("not.be.disabled").click();
        // cy.get('[style="display: block; top: 422.509px; left: 329.108px;"] > .datetimepicker-hours > .table-condensed > tbody > tr > td > :nth-child(20)').should("not.be.disabled").click();
        // cy.get('[style="display: block; top: 422.509px; left: 329.108px;"] > .datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(12)').should("not.be.disabled").click();

        cy.get('[style="display: block; top: 423.2px; left: 660.038px;"] > .datetimepicker-days > .table-condensed > tbody > :nth-child(6) > :nth-child(3)').click();
        cy.get('[style="display: block; top: 423.2px; left: 672.038px;"] > .datetimepicker-hours > .table-condensed > tbody > tr > td > .active').click();
        cy.get('[style="display: block; top: 423.2px; left: 672.038px;"] > .datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(11)').click();
        //cy.get('[style="display: block; top: 423px; left: 671.875px;"] > .datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(7)').click();

        // cy.get('[style="display: block; top: 422.509px; left: 672.048px;"] > .datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(12)').click();
        cy.get('#txtrfqdescription').should("be.visible").type("RFQ testing for file download in diffferent versions");

        // cy.get('#drp_TechnicalApp').should("be.visible");
        // cy.get('#ddlapprovertype').should("be.visible");
       

        
        cy.get('#file1').click().wait(6000);
        
       
     
        cy.get('#txtApprover').type("priya chauhan");
        cy.get('.typeahead > .active > a').click();
        cy.get(':nth-child(4) > .col-md-1 > #Addbtn1').click();
        cy.get('.row > .col-md-offset-5 > .yellow').click();


        //step2 Items/Services

        cy.get('#txtshortname').should("be.visible").should("not.be.disabled").type("Item A");
        cy.get('#txtbiddescriptionP').should("be.visible").should("not.be.disabled").type("IBM Rational Test Workbench provides software testing tools to support a DevOps approach: API testing, functional UI testing, performance testing and service virtualization.");
        cy.get('#txtquantitiy').should("be.visible").should("not.be.disabled").type("65");
        cy.get('#txtUOM').should("be.visible").should("not.be.disabled").type("Number{Enter}");
        cy.get('#txtedelivery').should("be.visible").should("not.be.disabled").type("Noida");
        cy.get('#add_or').click();
        
        // cy.get('#txtshortname').should("be.visible").should("not.be.disabled").type("item R");
        // cy.get('#txtbiddescriptionP').should("be.visible").should("not.be.disabled").type("IBM Rational Test Workbench provides software testing tools to support a DevOps approach: API testing, functional UI testing, performance testing and service virtualization. 1");
        // cy.get('#txtquantitiy').should("be.visible").should("not.be.disabled").type("65");
        // cy.get('#txtUOM').should("be.visible").should("not.be.disabled").type("Number{Enter}");
        // cy.get('#txtedelivery').should("be.visible").should("not.be.disabled").type("Noida");
        // cy.get('#add_or').click();
        
        // cy.get('#txtshortname').should("be.visible").should("not.be.disabled").type("Item C");
        // cy.get('#txtbiddescriptionP').should("be.visible").should("not.be.disabled").type("IBM Rational Test Workbench provides software testing tools to support a DevOps approach: API testing, functional UI testing, performance testing and service virtualization.");
        // cy.get('#txtquantitiy').should("be.visible").should("not.be.disabled").type("65");
        // cy.get('#txtUOM').should("be.visible").should("not.be.disabled").type("Number{Enter}");
        // cy.get('#txtedelivery').should("be.visible").should("not.be.disabled").type("Noida");
        // cy.get('#add_or').click();
        
        // cy.get('#txtshortname').should("be.visible").should("not.be.disabled").type("Item B");
        // cy.get('#txtbiddescriptionP').should("be.visible").should("not.be.disabled").type("IBM Rational Test Workbench provides software testing tools to support a DevOps approach: API testing, functional UI testing, performance testing and service virtualization.");
        // cy.get('#txtquantitiy').should("be.visible").should("not.be.disabled").type("65");
        // cy.get('#txtUOM').should("be.visible").should("not.be.disabled").type("Number{Enter}");
        // cy.get('#txtedelivery').should("be.visible").should("not.be.disabled").type("Noida");
        // cy.get('#add_or').click();
        

        cy.get('#txtshortname').should("be.visible").should("not.be.disabled").type("Item v");
        cy.get('#txtbiddescriptionP').should("be.visible").should("not.be.disabled").type("IBM Rational Test Workbench provides software testing tools to support a DevOps approach: API testing, functional UI testing, performance testing and service virtualization. 2");
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
        

        cy.get('.row > .col-md-offset-5 > .yellow').click();


        //step4

        cy.get('.select2-arrow > b').click();
        cy.get('.select2-input').type("demo{Enter}");
        cy.get('#chkvender289').click();
        cy.get('#chkvender460').click();
        cy.get('#chkvender474').click();
        //cy.get('#chkvender462').should("be.visible").click();

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
  