describe('The Home Page', () => {
    it('successfully login and look up z', () => {
      cy.visit('/')
      cy.get('[data-test="username"]').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="product_sort_container"]').select('za') 
    })
  })