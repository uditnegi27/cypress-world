class VerifyOtpPage {

    getVerifyOtpPageHeader(){
        return cy.contains('Verify OTP')
    }

    getVerifyOtpButton(){
        return cy.get("[type='submit']")
    }

    getBackButton(){
        return cy.get('.close-icon')
    }

}

export default VerifyOtpPage;