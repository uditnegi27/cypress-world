class HomePage {

    getNamebox(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getEmailBox(){
        return cy.get('input[name="email"]:nth-child(2)')
    }

    getPasswordBox(){
        return cy.get('#exampleInputPassword1')
    }

    getGender(){
        return cy.get('select')
    }

    getShopPage(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}
export default HomePage;