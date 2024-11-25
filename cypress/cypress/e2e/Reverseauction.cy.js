describe("Edit Profile", () => {
    beforeEach(() => {
      cy.visit("https://procurengine.com//aspl/");
      //cy.visit("https://pev3qaapp.azurewebsites.net/aspl");
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    
      cy.get('#username').should("not.be.disabled").type("priya.chauhan@agileapt.com"); 
      cy.get("#password").should("not.be.disabled").type("Pc@1234");
      //cy.get("#password").should("not.be.disabled").type("Pc@1234");
      cy.get('.col-sm-8 > .btn').click();  

 
     });
    it("Usr RA", () => {
        cy.get('.sidebar-toggler-wrapper > .sidebar-toggler').click();
        //cy.get('li.open > [href="javascript:;"] > .fa').click();
        cy.get('#ulMain > :nth-child(3) > [href="javascript:;"]').trigger('mouseover').click();
        cy.get('#MenuHeader1 > :nth-child(4) > a').click()
        cy.get('#txtBidSubject').type("RA testing ");
        cy.get('#txtbiddescription').type("shhs");
        //calender

        cy.get('.col-md-4 > .input-group > .input-group-btn > #btncal > .fa').click();
        cy.get(':nth-child(5) > .active').click();
        cy.get('.datetimepicker-hours > .table-condensed > tbody > tr > td > .active').click();
        cy.get('.datetimepicker-minutes > .table-condensed > tbody > tr > td > :nth-child(12)').click();
       
        cy.get('#txtBidDuration').type("20")
        // cy.get('#dropCurrency');
        // cy.get('#file2')

        
    

        //allitemsin one go or staggere option

      //  cy.get('#ddlbidclosetype').wait(600).click().select("Stagger at:Item level");
      //  cy.get('#txtConversionRate').click().wait(6000);

        cy.get('#file1').click().wait(6000);
        cy.get('#txtApprover').type("Priya Chauhan{Enter}");
        cy.get('.col-md-offset-5 > .btn-success').click();

        //step2

        cy.get('#txtdestinationPort').type("Demo A");
        cy.get('#txtquantitiy').type("20");
        cy.get('#txtUOM').type("package{Enter}");
        cy.get('#txtCeilingPrice').type("3000");
        cy.get('#txtminimumdecreament').type("10");

        //Stagger time
       //cy.get('#txtitembidduration').type(3);
        cy.get('#add_or').click();
       


        //item2
        cy.get('#txtdestinationPort').type("Demo B");
        cy.get('#txtquantitiy').type("20");
        cy.get('#txtUOM').type("package{Enter}");
        cy.get('#txtCeilingPrice').type("2500");
        cy.get('#txtminimumdecreament').type("10");
        //cy.get('#txtitembidduration').type(3);
        cy.get('#add_or').click();


        // //stagger items



        // cy.get('#txtdestinationPort').type("Demo N");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("30000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();


        // cy.get('#txtdestinationPort').type("Demo M");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("35000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo L");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("30000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo d");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("40000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo e");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("40000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo f");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("45000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo g");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("45000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo i");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("50000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo j");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo G");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo X");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo Z");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo z");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo W");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo w");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo Q");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo q");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo 1");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo Aa");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo aa");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo Cc");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo cc");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();

        // cy.get('#txtdestinationPort').type("Demo 1");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        // cy.get('.col-md-offset-5 > .btn-success').click();

        // cy.get('#txtdestinationPort').type("Demo 2");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        // cy.get('.col-md-offset-5 > .btn-success').click();

        // cy.get('#txtdestinationPort').type("Demo 4");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        // cy.get('.col-md-offset-5 > .btn-success').click();

        // cy.get('#txtdestinationPort').type("Demo 5");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        // cy.get('.col-md-offset-5 > .btn-success').click();

        // cy.get('#txtdestinationPort').type("Demo 6");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        // cy.get('.col-md-offset-5 > .btn-success').click();


        // cy.get('#txtdestinationPort').type("Demo 7");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        // cy.get('.col-md-offset-5 > .btn-success').click();


        // cy.get('#txtdestinationPort').type("Demo 8");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        // cy.get('.col-md-offset-5 > .btn-success').click();

        // cy.get('#txtdestinationPort').type("Demo 9");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        // cy.get('.col-md-offset-5 > .btn-success').click();

        // cy.get('#txtdestinationPort').type("Demo 10");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        // cy.get('.col-md-offset-5 > .btn-success').click();

        // cy.get('#txtdestinationPort').type("Demo 11");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        // cy.get('.col-md-offset-5 > .btn-success').click();

        // cy.get('#txtdestinationPort').type("Demo 12");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        // cy.get('.col-md-offset-5 > .btn-success').click();

        // cy.get('#txtdestinationPort').type("Demo 13");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        // cy.get('.col-md-offset-5 > .btn-success').click();


        // cy.get('#txtdestinationPort').type("Demo 14");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        // cy.get('.col-md-offset-5 > .btn-success').click();

        // cy.get('#txtdestinationPort').type("Demo 15");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        // cy.get('.col-md-offset-5 > .btn-success').click();

        // cy.get('#txtdestinationPort').type("Demo 16");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        // cy.get('.col-md-offset-5 > .btn-success').click();
     

        //itemC

        // cy.get('#txtdestinationPort').type("Demo C");
        // cy.get('#txtquantitiy').type("20");
        // cy.get('#txtUOM').type("package{Enter}");
        // cy.get('#txtCeilingPrice').type("20000");
        // cy.get('#txtminimumdecreament').type("1000");
        // //cy.get('#txtitembidduration').type(3);
        // cy.get('#add_or').click();
        cy.get('.col-md-offset-5 > .btn-success').click();







        //step3

        
        

        //invite vendors

        cy.get('#txtVendorGroup').type("demo{Enter}");
        //cy.get('#chkvender460').click();
        cy.get('#chkvender25751').click();
        cy.get('#chkvender11323').click();
        cy.get('#chkvender11321').click();
        cy.get('#chkvender11322').click();
        cy.get('#chkvender9346').click();
        cy.get('#chkvender8963').click();
        cy.get('#chkvender201').click();

       
        //cy.get('#chkvender9018').click();
        cy.get('.row > .col-md-offset-5 > .green').click();

        cy.get('#btnsubmit').click();

        cy.get('#btnbidapproversamesubmit').click();
        cy.get('.bootbox > .modal-dialog > .modal-content > .modal-footer > .btn').click();




       
    });
   
    
    
  });
  