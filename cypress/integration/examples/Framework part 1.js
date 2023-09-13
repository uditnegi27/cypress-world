/// <reference types = "cypress"/>
import HomePage from '../PageObjects/HomePage'
import ProductsPage from '../PageObjects/ProductsPage'

describe('Framework ', function() {

    // before(function() {
    //     cy.fixture('example').then(function(data){
    //         this.data = data
    //     })
    // })

    beforeEach(function(){

        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    
    it('Framework part 1', function() {
        const homepage = new HomePage()
        const productpage = new ProductsPage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homepage.getNamebox().type(this.data.name)
        homepage.getEmailBox().type(this.data.email)
        homepage.getPasswordBox().type(this.data.password)
        homepage.getGender().select(this.data.gender)
        homepage.getShopPage().click()

        this.data.productName.forEach(function(ele) {
            cy.addProduct(ele)
        })
  
        productpage.getCheckoutPage().click()
    //    cy.addProduct('iphone') 
    //    cy.addProduct('Blackberry')
        var sum = Number(0)
        cy.get('tr > td:nth-child(4) > strong').each(($e, index, $list) => {
            const number = $e.text()
            var result = number.split(" ")
            result = result[1].trim()
            sum += Number(result)
        }).then(()=>{
            cy.log(sum)
        })
        
        cy.get('h3 strong').then(function(ele) {
            const finalNum = ele.text()
            var finalres = finalNum.split(" ")
            finalres = finalres[1].trim();
            expect(Number(finalres)).to.equal(sum)
        })

        cy.contains('Checkout').click()
        cy.get('#country').type('india')
        cy.wait(6000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        cy.get('.alert.alert').then(function(el) {
            expect(el.text().includes("Success")).to.be.true

        })
    })
})