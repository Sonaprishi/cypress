function getText(byclassName)
        {
         let campaign;
            cy.get(byclassName)
            .invoke('text').then((text) => {
              campaign = text
              cy.log('campaign',  text)
              return text          
            })
        }