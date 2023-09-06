const { Given,When,Then,And } = require("@badeball/cypress-cucumber-preprocessor");
const homepage = new HomePage()
const productpage = new ProductsPage()


Given('open website', () => 
{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

When('i added product in cart', () => 
{
    homepage.getShopPage().click()
    this.data.productName.forEach(function(ele) {
        cy.addProduct(ele)
    })
    productpage.getCheckoutPage().click()
     
}) 

And('validate the total price', () =>
{
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
})

Then('select the country and verify order flow', () => 
{
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

When('I fill the details', () =>
{ 
    homepage.getNamebox().type(this.data.name)
    homepage.getEmailBox().type(this.data.email)
    homepage.getPasswordBox().type(this.data.password)
    homepage.getGender().select(this.data.gender)

})

Then('go to shop page', () =>
{
    homepage.getShopPage().click()
})