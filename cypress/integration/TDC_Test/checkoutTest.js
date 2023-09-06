/// <reference types= "cypress"/>

import AllProductPage from "../TDC/allProductPage";
import HomePage from "../TDC/HomePage";
import Cart from "../TDC/cart"
import CheckoutPage from "../TDC/checkoutPage";

describe('checkout page and payment testsuit', () =>
{
    const homePage = new HomePage()
    const allProductPage = new AllProductPage()
    const cart = new Cart()
    const checkout = new CheckoutPage()

    beforeEach(()=>{
        cy.viewport(2800, 1200)
        cy.visit('https://thedermaco.com/')
        homePage.getAllProductPageButton().click({force:true})
        cy.wait(5000)
        allProductPage.addProductFromShopPlp();
        cy.openCart()
        cart.getContinueButton().click()
    })

    it('initiate payment without filling the Delivery Address details', () =>
    {
        checkout.getUpiPayButton().click()
        cy.get('.error').should('be.visible');
        cy.contains('First name Required').should('be.visible')
    })

    it('initiate payment with first name only in Delivery Address details', () =>
    {
        checkout.getFirstName().type('Test')
        checkout.getUpiPayButton().click()
        cy.get('.error').should('be.visible');
        cy.contains('Last name Required').should('be.visible')
    })

    it('initiate payment with first name and last name only in Delivery Address details', () =>
    {
        checkout.getFirstName().type('Test')
        checkout.getLastName().type('User')
        checkout.getUpiPayButton().click()
        cy.get('.error').should('be.visible')
        cy.contains('Required').should('be.visible')
    })

    it('initiate payment with first, last name and number only in Delivery Address details', () =>
    {
        checkout.getFirstName().type('Test')
        checkout.getLastName().type('User')
        checkout.getPhoneName().type('9876676574')
        checkout.getUpiPayButton().click()
        cy.get('.error').should('be.visible')
        cy.contains('Required').should('be.visible')
    })

    it('initiate payment with first, last name, number and email in Delivery Address details', () =>
    {
        checkout.getFirstName().type('Test')
        checkout.getLastName().type('User')
        checkout.getPhoneName().type('9876676574')
        checkout.getEmailAddress().type('test123user@gmail.com')
        checkout.getUpiPayButton().click()
        cy.get('.error').should('be.visible')
        cy.contains('Enter 6 digit PIN Code').should('be.visible')  
    })

    it('initiate payment with empty address in Delivery Address details', () =>
    {
        checkout.getFirstName().type('Test')
        checkout.getLastName().type('User')
        checkout.getPhoneName().type('9876676574')
        checkout.getEmailAddress().type('test123user@gmail.com')
        checkout.getPincode().type('110001')
        // cy.wait(5000)
        checkout.getUpiPayButton().click()
        cy.get('.error').should('be.visible')
        cy.contains('Required').should('be.visible')  
    })

    it('initiate payment with empty UPI ID', () =>
    {
        checkout.getFirstName().type('Test')
        checkout.getLastName().type('User')
        checkout.getPhoneName().type('9876676574')
        checkout.getEmailAddress().type('test123user@gmail.com')
        checkout.getPincode().type('110001')
        checkout.getAddress().type('Test address')
        checkout.getUpiPayButton().click()
    })

    it('select the COD payment method for payment', () =>
    {
        cy.fillDeliveryAddress()
        cy.wait(6000)
        checkout.getCodPayButton().click()
        cy.wait(4000)
        // cy.contains('COD Charge').should('be.visible')
        cy.get('.desktop-message').should('be.visible')
    })

    it('verify the COD charges when COD payment method is selected', () =>
    {

    })
})