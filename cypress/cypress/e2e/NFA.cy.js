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
    it("Usr FA", () => {
      
        cy.get('.sidebar-toggler-wrapper > .sidebar-toggler').click();
        cy.get('#ulMain > :nth-child(3) > [href="javascript:;"]').click();


        //NFA Request

        cy.get('#MenuHeader1 > :nth-child(7) > a').click();


        //NFA overview
        cy.get('#ddlEventType').select("Request For Quotation");
        cy.get('#txtEventref').type("RFQ test | 43{Enter}").wait(1000);
        cy.get('#txtAmountFrom').type("1")
        cy.get('#txtBudget').type("100000");
        cy.get('#dropCurrency').select("INR");
        cy.get('#txtProjectName').type("User is configuring Bid to ge quotes and select the vendor this Bid involves Scrap and metals and plastics");

        // Puchase org
        // cy.get('#ddlPurchaseOrg').select("")

        // purchase group
        // cy.get('#ddlPurchasegroup').select("")
        

        //Condition

        cy.get('#ddlCondition').select("No exception")

        // Remarks

        //cy.get('#txtRemark').type("User is configuring Bid to ge quotes and select the vendor this Bid involves Scrap and metals and plastics")

        cy.get('.col-md-offset-5 > .btn-success').click();


        //NFA Details

        cy.get('#paramremark25').type("User is configuring Bid to ge quotes and select the vendor this Bid involves Scrap and metals and plastics");
        cy.get('#paramremark36').type("User is configuring Bid to ge quotes and select the vendor this Bid involves Scrap and metals and plastics");
        cy.get('#paramremark75').type("User is configuring Bid to ge quotes and select the vendor this Bid involves Scrap and metals and plastics");
        cy.get('#paramremark94').type("User is configuring Bid to ge quotes and select the vendor this Bid involves Scrap and metals and plastics");
        //cy.get('#ddlNFAParam').select("Question 3");
        //cy.get('#addques').click();
        //cy.get('#paramremark32').type("User is configuring Bid to ge quotes and select the vendor this Bid involves Scrap and metals and plastics");
        cy.get('.col-md-offset-5 > .btn-success').click();   
        cy.get('.col-md-offset-5 > .green').click()   
     });
  });
  