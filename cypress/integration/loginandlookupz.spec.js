describe('The Home Page', () => {
    it('successfully login and look up z', () => {
      cy.login()
      cy.get('[data-test="product_sort_container"]').select('za')
    })
  })