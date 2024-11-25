

describe("Edit Profile", () => {
    beforeEach(() => {
      cy.visit("https://pev3qaapp.azurewebsites.net/aspl/");
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
  
     });
     it("RegisterParticipent", () =>{
        cy.get('#username').should("be.visible").should("not.be.disabled").type("priya.chauhan@agileapt.com"); 
      cy.get("#password").should("be.visible").should("not.be.disabled").type("1234");
      cy.get(".col-sm-8 > .btn").should("be.visible").click(); 
      cy.get('.sidebar-toggler-wrapper > .sidebar-toggler').click();
      
      cy.get('#ulMain > :nth-child(4) > [href="javascript:;"]').click();
      
      cy.get('#MenuHeader2 > :nth-child(3) > a').click();
      cy.wait(2000);
  
      cy.get('#txtUI').should("not.be.disabled").type("123456789099548");
      cy.get('#entryForm > :nth-child(3) > :nth-child(1) > .col-lg-1 > #btnvendor').click();
      
      cy.get('#ParticipantName').should("be.visible").should("not.be.disabled").type("Vendor P");
      cy.get('#ContactName').should("be.visible").type("Mr. U");
      cy.get('#txtAddress').should("not.be.disabled").type("Noida");
      cy.get('#s2id_ddlCountry > .select2-choice > .select2-arrow > b').click();
      cy.get(':nth-child(111) > .select2-result-label').click();
      
      cy.get('#s2id_ddlState > .select2-choice > .select2-arrow > b').click();
      cy.get(':nth-child(8) > .select2-result-label').click();
      cy.wait(500);
      cy.get('#s2id_ddlCountryCd > .select2-choice > .select2-arrow > b').click();
      cy.get(':nth-child(112) > .select2-result-label').click();
      cy.get('#s2id_ddlCity > .select2-choice > .select2-arrow > b').click();
      cy.get(':nth-child(5) > .select2-result-label').click();
      cy.get('#txtZipCd').should("not.be.disabled").type("124353453");
      cy.get('#txtPanNo').should("be.disabled");
      cy.get('#s2id_ddlCountryCdPhone > .select2-choice > .select2-arrow > b').click();
      cy.get(':nth-child(112) > .select2-result-label').click();
      cy.get('#txtMobileNo').should("not.be.disabled").type("9986455354");
      cy.get('#txtTINNo').should("be.disabled");
      cy.get('#txtPhoneNo').should("not.be.disabled");
      cy.get('#txtPhoneNo').should("be.visible").should("not.be.disabled").type("6532493749");
      cy.get('#txtcompanyemail').should("be.visible").should("not.be.disabled").type("sonaprishi@gmail.com");
      cy.get('#ddlpreferredTime').select("Asia/Calcutta");
      cy.get(':nth-child(1) > :nth-child(1) > #uniform-chkbidTypes > #spancheckedvendorgroup > .childchkbox').check();
      cy.get(':nth-child(4) > :nth-child(1) > #uniform-chkbidTypes > #spancheckedvendorgroup > .childchkbox').check();
      cy.get('#btnsumbit').click();
  
     
  
  
  
     })
    
  
   
  
    
    
  });
  