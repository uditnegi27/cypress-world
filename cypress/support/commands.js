// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('openCart', () =>
{
    cy.get('.cart-icon').click()
})


Cypress.Commands.add('fillDeliveryAddress', () =>
{
    cy.get("[name = 'firstname']").type('Test')
    cy.get("[name = 'lastname']").type('User')
    cy.get("[name = 'telephone']").type('9876676574')
    cy.get("[name = 'email']").type('test123user@gmail.com')
    cy.get("[name = 'postcode']").type('110001')
    cy.get("[name = 'street']").type('Test address')
})
    
















Cypress.Commands.add('addProduct', (productName) => {
    cy.get('h4.card-title').each(($e1, index, $list) => {
        const title = $e1.text()
        if(title.includes(productName))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })
})

Cypress.Commands.add('Login', () =>
{
    cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login',
    {"userEmail": "testusertest@gmail.com", "userPassword": "Test@@12"}).then(function(response)
    {
        Cypress.env('token', response.body.token)
    })
})

Cypress.Commands.add('addressFormFill', () =>
{
    cy.get("[name='firstname']").type('test')
    cy.get("[name='lastname']").type('user')
    cy.get("[name='email']").type('testtest123@gmail.com')
    cy.get("[name='telephone']").type('9834343400')
    cy.get("[name='postcode']").type('110001')
    cy.get("[name='street']").type('Test address test')
})






