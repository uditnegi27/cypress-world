/// <reference types= "cypress"/>
describe('New test for API', ()=>
{
    it('second test case', ()=>
    {
        
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
       
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (res) =>
        {
            res.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=udit'
            res.continue((newRes)=>
            {
                expect(newRes.statusCode).to.equal(403)
            })
        }).as('dummyurl')
        cy.get('.btn-primary').click()
        cy.wait('@dummyurl')
        
        // cy.get()
        // cy.get('p').should('have.text','Oops only 1 Book available')

    })
})
