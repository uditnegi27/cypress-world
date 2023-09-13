/// <reference types= "cypress"/>

import HomePage from "../TDC/HomePage";
import LoginPage from "../TDC/loginPage";
import SignupPage from "../TDC/signupPage";
import VerifyOtpPage from "../TDC/verifyOtpPage";


describe('login feature test suit', () =>
{
    const homePage = new HomePage()
    const loginPage = new LoginPage();
    const signupPage = new SignupPage();
    const verifyOtpPage = new VerifyOtpPage();

    beforeEach(()=>{
        cy.viewport(2800, 1200)
        cy.visit('https://thedermaco.com/')
        homePage.getProfileDropdownSection().click();
    })

    it('Guest User -> Verify login popup screen opened or not when click on profile button?', ()=>
    {
        loginPage.getPageTitle().should('be.visible');
        loginPage.getNumberInputSection().type('9773953566');
        signupPage.getSubmitButton().click()
        signupPage.getSubmitButton().click()
        cy.get('.error').should('be.visible');
        cy.contains('First name Required').should('be.visible')
    })

    it('Login after entering valid number', ()=>
    {
        loginPage.getPageTitle().should('be.visible');
        loginPage.getNumberInputSection().type('9773953566');
        loginPage.getLoginWithOtpButton().click()
        
    })
})