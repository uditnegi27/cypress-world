class LoginPage{

    getNumberInputSection(){
        return cy.get("[name='contact']")
    }

    getLoginWithOtpButton(){
        return cy.contains("LOGIN WITH OTP")
    }

    getContinueAsGuestButton(){
        return cy.contains("CONTINUE AS GUEST")
    }

    getCloseIconButton(){
        return cy.get('.close-icon')
    }

}

export default LoginPage;