class CheckoutPage {

    getFirstNameField(){
        return cy.get('[name="firstname"]')
    }

    getLastNameField(){
        return cy.get('[name="lastname"]')
    }

    getEmail(){
        return cy.get('[name="email"]')
    }

    getPhoneNumber(){
        return cy.get('[name="telephone"]')
    }

    getPincode() {
        return cy.get('[name="postcode"]')
    }

    getAddress(){
        return cy.get('[name="street"]')
    }

    getFieldAddress(){
        this.getFirstNameField().type('udit')
        this.getLastNameField().type('Negi')
        this.getEmail().type('test@gmail.in')
        this.getPhoneNumber().type('9876545678')
        this.getPincode().type('110050')
        this.getAddress().type('Test address')
    }
}

export default CheckoutPage;