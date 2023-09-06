/// <reference types = "cypress"/>

describe( 'My first test suit', function() {
    it('My first test', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)

        //Aliasing 
        cy.get('.products').as('ProductLocator')
        //parent to child element 
        cy.get('@ProductLocator').find('.product').should('have.length',4)

        //click on add to cart of 3rd product
        cy.get('@ProductLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function(){
            console.log('yesy yesy')
        })

        // assertion for text
        cy.get('.brand').should('have.text', 'GREENKART')
        

        //using each function of cypress
        cy.get('@ProductLocator').find('.product').each(($e1, index, $list) => {
            const name = $e1.find('.product-name').text()
            if(name.includes('Capsicum')){
                $e1.find('button').click()
            }
        })

        //Capturing the title of the page
        cy.get('.brand').then(function(logo)
        {
            cy.log(logo.text())
        })
        
        
       
    })
})