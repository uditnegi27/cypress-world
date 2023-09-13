class SignupPage{

    getFirstNameInputSection(){
        return cy.get("[name='firstName']")
    }

    getLastNameInputSection(){
        return cy.get("[name='lastName']")
    }

    getEmailInputSection(){
        return cy.get("[name='email']")
    }

    getEmailInputSection(){
        return cy.get("[name='email']")
    }

    getSubmitButton(){
        return cy.contains('SIGN UP')
    }
    
}

export default SignupPage;