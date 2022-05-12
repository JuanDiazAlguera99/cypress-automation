Cypress.Commands.add('login', (standard_user, secret_sauce)  => { 
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('Badlogin', (problem_user, secret)  => { 
    cy.visit('/')
    cy.wait(400)
    cy.get('[data-test="username"]').type('problem_user')
    cy.wait(400)
    cy.wait(400)
    cy.get('[data-test="password"]').type('secret')
    cy.wait(400)
    cy.get('[data-test="login-button"]').click()
})
 
Cypress.Commands.add('ShoppingCartBadge', ()  => { 
    cy.get('.shopping_cart_badge').click()
})

Cypress.Commands.add('Checkout', ()  => { 
    cy.get('[data-test="checkout"]').click()
})

Cypress.Commands.add('Name', ()  => { 
    cy.get('[data-test="firstName"]')
})

Cypress.Commands.add('Lastname', ()  => { 
    cy.get('[data-test="lastName"]')
})

Cypress.Commands.add('PostalCode', ()  => { 
    cy.get('[data-test="postalCode"]')
})

Cypress.Commands.add('Continue', ()  => { 
    cy.get('[data-test="continue"]').click()
})


Cypress.Commands.add('Finish', ()  => { 
    cy.get('[data-test="finish"]').click()
})



Cypress.Commands.add('center', ()  => { 
    cy.scrollTo(100, 150)
})

Cypress.Commands.add('backhome', ()  => { 
    cy.get('[data-test="back-to-products"]').click()
})

Cypress.Commands.add('buybackpack', ()  => { 
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
})



