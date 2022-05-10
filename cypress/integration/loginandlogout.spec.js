describe('The Home Page', () => {
    it('successfully login and logout', () => {
      cy.login()
      cy.get('Open Menu').click()
    })
  })