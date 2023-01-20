//Passing test:
// describe('My First Test', () =>{
//   it('Does not do much!', () =>{
//     expect(true).to.equal(true)
//   })
// })

//Failing test:
// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })

// A solid test generally covers 3 phases:

// Set up the application state.
// Take an action.
// Make an assertion about the resulting application state.

//Sometimes Given => When => Then
//Or
//Arrange => Act => Assert

//test that actually visits a url
// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

//Find content "type"
//uses default assertion (built to fail if it doesn't find something)
describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')
    //Adding click does the expected
    cy.contains('type').click()
    //Should be on a new url which includes
    //'/commands/actions'
    cy.url().should('include', '/commands/actions')
    //Get an input, type into it
    cy.get('.action-email').type('fake@email.com')
    //verify that the value updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})

// Cypress automatically detects things like a 
// page transition event and will automatically 
// halt running commands until the next page 
// has finished loading.