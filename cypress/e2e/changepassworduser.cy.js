

describe("Edit Profile", () => {
    beforeEach(() => {
      cy.visit("https://pev3qaapp.azurewebsites.net/aspl/");
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    //   cy.get('#username'); // login
    //   cy.get("#password");
    //   cy.get(".col-sm-8 > .btn").click();   //Blank user
    //           //


      // cy.get('#username').type("avendor1121@gmail.com"); 
      // cy.get("#password").type("asdf");
      // cy.get(".col-sm-8 > .btn").click();   //Invalid user
      cy.get('#username').type("priya.chauhan@agileapt.com"); 
      cy.get("#password").type("1234");
      cy.get(".col-sm-8 > .btn").click();  

 
     });
    it("Usr logIN Page", () => {
      cy.get('.dropdown-toggle > .fa').trigger("mouseover");
      cy.get('#lichngepass > a').click();
      cy.get('#oPassword').should("be.visible").should("not.be.disabled").type("1234");
      cy.get('#nPassword').should("be.visible").should("not.be.disabled").type("1234");
      cy.get('#reEnterPass').should("be.visible").should("not.be.disabled").type("1234");
      cy.get('#submitbtn').click();
      
      
    });
   
    
    
  });
  