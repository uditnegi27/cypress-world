/// <reference types="cypress"/>

import CheckoutPage from '../AqualogicaHome/CheckoutPage'


describe("Aqualogica checkout tests", () => {

    var Guest_CartId;

    beforeEach(function() {

        cy.fixture('example').then(function(data){
            this.data = data
        })

        cy.intercept('GET','https://cart.aqualogica.in/v1/carts/create-guest',
        (res) =>
        {
            res.continue((newRes)=>
            {
                Cypress.env('guestCartId',newRes.body.cartId)
            })
        }).as('preResponse')
        cy.visit('https://aqualogica.in/')
        cy.wait('@preResponse')

        // cy.viewport(1800,1000)
        cy.visit('https://aqualogica.in/')
    })


    // cy.intercept({method:'GET', url:'https://cart.aqualogica.in/v1/carts/create-guest'},
        // {statusCode:200}).as('reponseBody')
        // cy.wait('@reponseBody')
        // cy.log(res)
        
    // it('check shop page content', () =>{
    //     cy.viewport(1000,660)
    //     cy.visit("https://aqualogica.in/")
    //     // cy.scrollTo(0, 500)
    //     // cy.get('.category').eq(1).invoke('show').click()
    //     // cy.get('.category').eq(0).click()
    //     cy.contains('All Products').click({ force: true })
    //     cy.wait(2000)
    //     cy.scrollTo(0, 500)

    //     cy.wait(2000)
    //     cy.get('.sc-hGoxap').click()
    //     cy.contains('Price - High to Low').click()
        
    //     cy.scrollTo(0, 500)

    //     var previo = Number(0)

    //     cy.get('.sc-cZBZkQ > section').should('have.length', 89)
    //     cy.get('.sc-cZBZkQ > section').each(($e, index, $list) => {
    //         var amount = $e.find("[class^='price']").text().split(" ")
    //         amount =Number(amount[1])
    //         expect(previo).greaterThan(amount)
    //         var previo = amount
            
    //     })
    // })

    // it("checkout with coupon", () =>{

    //     const checkout = new CheckoutPage()

    //     cy.viewport(320, 580)

    //     cy.visit("https://aqualogica.in/")
    //     cy.scrollTo(0, 100)
    //     cy.get('.sc-iELTvK.fuzVwE.search-cards').each(($e, index, $list) =>{
    //         const title = $e.find('.title').text()
    //         if(title.includes('Glow+ Dewy Sunscreen 50g')){
    //             $e.find("button").click()
    //         }
    //     })

    //     cy.get('.cart-trigger').click()
    //     cy.contains('Continue').click()
    //     checkout.getFieldAddress()

    //     // checkout.getFirstNameField().type('udit')
    //     // checkout.getLastNameField().type('Negi')
    //     // checkout.getEmail().type('test@gmail.in')
    //     // checkout.getPhoneNumber().type('9876545678')
    //     // checkout.getPincode().type('110050')
    //     // checkout.getAddress().type('Test address')

    // })



    // it('checkout', () => 
    // {
    //     const checkout = new CheckoutPage()
        
    //     cy.get('.uniquewhite').each(($e, index, $list) =>
    //     {
    //         if($e.find('div.title').text().includes('Glow+ Dewy Sunscreen 50g')){
    //             $e.find('button').click()
    //         }
    //         else if($e.find('div.title').text().includes('Illuminate+ Oil-free Moisturizer with Wild Berries and Alpha Arbutin -  100g')){
    //             $e.find('button').click()
    //         }
    //     }) 

    //     cy.get('.cart-icon').click()
        

    //     var sum = Number(0)
    //     var discount = Number(0)
    //     cy.get('.sc-EHOje tr td:nth-child(1)').each(($e, index, $list) => 
    //     {
    //         const number = $e.text()
    //         // cy.log(number)
    //         var amount = number.slice(1)
    //         // cy.log(amount)
            
    //         sum += Number(amount)
    //     }).then(() => {cy.log('this is sumation ->   '+ sum)
    //     discount = Number((sum*5)/100);
    //     cy.log('this is Final deduction amount  ->   '+ discount)
    //     sum -= discount
    //     }).then(()=>{
    //         cy.log('this is Final sum  ->   '+ sum)
    //     })

        
    //     var FAmount = Number(0)
    //     cy.get('.checkout-button-wrapper .price').then((Element) => {
    //         const price = Element.text()
    //         FAmount = Number(price.slice(1))
    //         cy.log('this is Price -> ------>>>>  '+FAmount)
    //     }).then(()=>{
    //         expect(Number(FAmount)).to.equal(sum)
    //     })

    //     cy.contains('Continue').click()
    //     // cy.get('input[name="firstname"]').type('Udit')

    //     checkout.getFieldAddress()
        
    //     cy.wait(5000)

    //     cy.get('.buttonText').each(($e, index, $list) => {
    //         if($e.text().includes('Cash on Delivery')){
    //             $e.click()
    //         }
    //         cy.log($e.text())
    //     })

    //     cy.wait(5000)

    //     var newS = Number(0)
    //     cy.get('.grand-total .item-value').eq(1).then((Element)=>{
    //         const newsum = Element.text()
    //         newS = Number(newsum.slice(1))
    //         sum += discount
    //     }).then(()=>{
    //         expect(newS).to.equal(sum)
    //     })
    // })

    it('test order flow with delivery charges', () =>
    {
        cy.get('.category:nth-child(1)').invoke('show')
        cy.get('a[href="/product-category/glow"] strong').click({force:true})
        cy.log(Cypress.env('guestCartId'))

        // This will apply the filter from price low to high
        cy.get('.sc-esjQYD').click()
        cy.get('.kFDcZb:nth-child(3)').click()

    })
})

