class CheckoutPage{

    getFirstName(){
        return cy.get("[name = 'firstname']")
    }

    getLastName(){
        return cy.get("[name = 'lastname']")
    }

    getPhoneName(){
        return cy.get("[name = 'telephone']")
    }

    getEmailAddress(){
        return cy.get("[name = 'email']")
    }
    
    getPincode(){
        return cy.get("[name = 'postcode']")
    }
    
    getAddress(){
        return cy.get("[name = 'street']")
    }



    getUpiPayButton(){
        return cy.get('.mobileHidden.payNowBtn')
    }
    getCodPayButton(){
        return cy.contains('Cash on Delivery')
    }
    
}

export default CheckoutPage;