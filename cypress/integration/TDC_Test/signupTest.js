/// <reference types= "cypress"/>

import HomePage from "../TDC/HomePage";
import LoginPage from "../TDC/loginPage";
import SignupPage from "../TDC/signupPage";
import VerifyOtpPage from "../TDC/verifyOtpPage";


describe('sign up feature test suit', () =>
{
    const homePage = new HomePage()
    const loginPage = new LoginPage();
    const signupPage = new SignupPage();
    const verifyOtpPage = new VerifyOtpPage();


    beforeEach(()=>{
        cy.viewport(2800, 1200)
        cy.visit('https://thedermaco.com/')
        var num = Math.floor(Math.random()*999)
        homePage.getProfileDropdownSection().click();
        loginPage.getNumberInputSection().type('8901234'+num)
        loginPage.getLoginWithOtpButton().click();
    })


    it('Enter submit button with all empty fields', ()=>
    {
        signupPage.getSubmitButton().click()
        signupPage.getSubmitButton().click()
        cy.get('.error').should('be.visible');
        cy.contains('First name Required').should('be.visible')
    })


    it('Enter submit button with first name only', ()=>
    {
        signupPage.getFirstNameInputSection().type('Test')
        signupPage.getSubmitButton().click()
        signupPage.getSubmitButton().click()
        cy.get('.error').should('be.visible');
        cy.contains('Last name Required').should('be.visible')
    })


    it('Enter submit button with first name only', ()=>
    {
        signupPage.getFirstNameInputSection().type('Test')
        signupPage.getLastNameInputSection().type('Negi')
        signupPage.getSubmitButton().click()
        signupPage.getSubmitButton().click()
        cy.get('.error').should('be.visible');
        cy.contains('Valid Email Id is Required').should('be.visible')
    })


    it('Enter submit button with all empty gender and DOB fields', ()=>
    {
        signupPage.getFirstNameInputSection().type('Udit')
        signupPage.getLastNameInputSection().type('Negi')
        signupPage.getEmailInputSection().type('test123Test@gmail.com');
        signupPage.getSubmitButton().click()
        verifyOtpPage.getVerifyOtpPageHeader().should('be.visible');
        verifyOtpPage.getVerifyOtpButton().should('be.visible')
    })
    
})