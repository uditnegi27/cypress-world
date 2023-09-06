class HomePage{

    getProfileDropdownSection(){
        return cy.get('.user-account-trigger')
    }

    getAllProductPageButton(){
        return cy.contains('All Products')
    }
}

export default HomePage;
