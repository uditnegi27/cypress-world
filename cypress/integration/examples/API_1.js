describe('API Testing', ()=>
{
    it('first API test case', ()=>

    {
        var chhh
        cy.intercept('GET','https://cart.aqualogica.in/v1/carts/create-guest',
        (res) =>
        {
            res.continue((newRes)=>
            {
                Cypress.env('guestCartId',newRes.body.cartId)
                chhh = newRes
            })
        }).as('dummyurl')
        cy.visit('https://aqualogica.in/')
        cy.wait('@dummyurl').then(()=>{
            cy.log(Object.keys(chhh.body))
        })

        







        // cy.visit('https://aqualogica.in/')
        // cy.wait(6000)
        // cy.log(localStorage.getItem('userId'))

       
        // cy.request('GET', 'https://cart.aqualogica.in/v1/carts/create-guest').then(function(response)
        // {
        //     expect(response.body).to.have.property("cartId")
        //     cy.log(response.body.cartId)
        // })

    })
})
