describe('The Home Page', () => {
    it('error login', () => {
      cy.visit('/')
      cy.get('[data-test="username"]').type('problem_user')
      cy.get('[data-test="password"]').type('secret')
      cy.get('[data-test="login-button"]').click()
    })
  })
