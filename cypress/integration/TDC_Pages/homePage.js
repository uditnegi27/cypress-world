class HomePage{

    getShopByConcernSection(){
        return cy.contains('Shop by Concern')
    }
    
    getAcneMarksPageButton(){
        return cy.contains('Acne Marks')
    }

    getPigmentationPageButton(){
        return cy.contains('Pigmentation')
    }
    
    getAcneScarsPageButton(){
        return cy.contains('Acne Scars')
    }

    getAcnePimplePageButton(){
        return cy.contains('Acne / Pimple')
    }

    getOpenPoresPageButton(){
        return cy.contains('Open Pores')
    }

    getHairCarePageButton(){
        return cy.contains('Hair Care')
    }

    getSkinRadiancePageButton(){
        return cy.contains('Skin Radiance')
    }

    getDryDullSkinPageButton(){
        return cy.contains('Dry & Dull Skin')
    }

    getViewAllPageButton(){
        return cy.contains('View All')
    }

    getAllProductPageButton(){
        return cy.contains('All Products')
    }

    getProfileDropdownSection(){
        return cy.get('.user-account-trigger')
    }

    // cy.contains('Free Skin Assessment').click({force:true})

}

export default HomePage;
