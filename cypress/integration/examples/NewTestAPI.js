/// <reference types= "cypress"/>

describe('New test for API', ()=>
{
    it('first test case', ()=>
    {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
       
        cy.intercept({method: 'GET', url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'},
        {
            statusCode:200,
            body:[{
                    "book_name": "Learn Appium Automation with Java",
                    "isbn": "SS80",
                    "aisle": "227"
                },
                {
                    "book_name": "Learn Appium Automation with Java",
                    "isbn": "SS80",
                    "aisle": "227"
                }]
        }).as('newRes')
        cy.get('.btn-primary').click()
        cy.wait('@newRes').then(({request,response}) =>
        {
            cy.get('tr').should('have.length', response.body.length+1)
        })
        // cy.get()
        // cy.get('p').should('have.text','Oops only 1 Book available')

    })
})