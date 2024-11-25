describe("Edit Profile", () => {
  before(() => {
    // This code will run once before all tests in the suite
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  beforeEach(() => {
    // This code will run before each test
    cy.visit("https://pev3proapi.azurewebsites.net/ProductandServiceCategory/fetchProductCategory/?CustomerID=1&For=M&MappedBy=..&ChildId=0&{}&_=1701234704861")
    .then((response) => {
            // Assuming the response body is JSON
            expect(response.body).to.have.property('key', 'value');
            
            // Add more assertions as needed
          });
          Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
          });
        });
      
        it("Visit the same URL 100 times", () => {
          for (let i = 0; i < 100; i++) {
            
            //cy.get('.some-element').should('exist');
          }
        });
      
  });

  


// describe("Edit Profile", () => {
//   beforeEach(() => {
//     cy.request("https://pev3proapi.azurewebsites.net/ProductandServiceCategory/fetchProductCategory/?CustomerID=1&For=M&MappedBy=..&ChildId=0&{}&_=1701234704861")
//     .then((response) => {
//       // Assuming the response body is JSON
//       expect(response.body).to.have.property('key', 'value');
      
//       // Add more assertions as needed
//     });
//     Cypress.on("uncaught:exception", (err, runnable) => {
//       return false;
//     });
//   });

//   it("Visit the same URL 100 times", () => {
//     for (let i = 0; i < 100; i++) {
      
//       //cy.get('.some-element').should('exist');
//     }
//   });

  
// });
