
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'kedc5v',
  
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "scripts": {
    "test": "cypress open",

    "record": "cypress run --record --key cb836c74-1c93-4df1-a682-d5a54be61877"
 
 }
});
