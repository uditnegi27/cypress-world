/// <reference types = "cypress"/>
// const newcsv = require('neat-csv')

describe('Learning test cases', ()=>
{
    it('first learning test case', ()=>
    {


        // cy.sqlServer("SELECT * FROM mydb.country;").then(function(result) {
        //     console.log(result[0][1])
        // })


        cy.Login().then(function()
        {
            cy.visit('https://rahulshettyacademy.com/client/',
            {
                onBeforeLoad:function(window)
                {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })

        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get('[routerlink*="cart"]').click()
        cy.contains('Checkout').click()
        cy.get('[placeholder*="Country"]').type('ind')
        cy.get('.ta-results button').each(($e, index, $list) =>
        {
            
            if($e.text() ===" India"){
                cy.wrap($e).click()
            }
        })
        cy.get('.action__submit').click()
        cy.get('.order-summary button').eq(0).click()
        // cy.readFile(Cypress.config("fileServerFolder")+'cypress/dowloads/order-invoice_testusertest.csv')
        // .then(async (text) => {
        //     const csv = await newcsv(text)
        //     console.log(csv)
        // })
        
    })
})