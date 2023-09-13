class AllProductPage{

    addProductFromShopPlp(){
        cy.get('.search-cards').each(($e1, index, $list) =>{
            if($e1.text().includes('Minimizes Pores | Makes Skin Smooth & Matte')){
                $e1.find('button').click()
            }
        })
    }

}

export default AllProductPage;