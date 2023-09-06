/// <reference types = "cypress"/>


describe('Practice senarios', function()
{
    it('My fiest practice senario', function() 
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input.search-keyword').type('to')
        cy.wait(2000)
        cy.get('.products').find('.product').each(($el, index, $list) => {
            cy.log('emter_1')
            const pName = $el.find('.product-name').text()
            cy.log('emter_2')
            if(pName.includes('Tomato')){
                cy.log('emter_3')
                $el.find('button').click()
                cy.log('emter_4')
            }
        })

        cy.get('.cart-icon').click()
        cy.get('button:contains("PROCEED TO CHECKOUT")').click()
        cy.get('button:contains("Place Order")').click()
        

    })
})
