/// <reference types= "cypress"/>

import AllProductPage from "../TDC_Pages/allProductPage";
import HomePage from "../TDC_Pages/HomePage";
import Cart from "../TDC_Pages/cart"
import CheckoutPage from "../TDC_Pages/checkoutPage";
import AcneScars from "../TDC_Pages/Categories/acneScars";

describe('All categories page test suit', ()=>
{

    const homePage = new HomePage()
    const anceScanPage = new AcneScars()
    const allProductPage = new AllProductPage()
    const cart = new Cart()
    const checkout = new CheckoutPage()

    beforeEach(()=>{
        cy.viewport(2800, 1200)
        cy.visit('https://thedermaco.com/')
    })

    
    it('open Acne Marks page from home page dropdown section', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getAcneMarksPageButton().click({force:true})
    })

    it('Acne Marks PLP page products images are visible ?', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getAcneMarksPageButton().click({force:true})
        cy.scrollTo(0, 1500);
        cy.wait(5000)
        cy.get('.ProductCard_Wrapper_DisplayArea img').each(($e1, index, $list) => {
            cy.wrap($e1).invoke('attr', 'src').then((src) =>{
               var url = src;
               cy.request('GET', url).then((res) =>{
                   expect(res.status).to.eq(200);
               })
            })
        })
    })

    it('add product to cart from Acne Marks page PLP and verify right product is added or not?', () =>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getAcneMarksPageButton().click({force:true})
        cy.wait(2000)
        cy.get('.search-cards').each(($e1, index, $list) =>{
            if($e1.text().includes('3% Niacinamide Foaming Face Wash - 100ml')){
                $e1.find('button').click()
            }
        })
        
        cy.get('.cart-icon').click()
        cy.get('.cart-item-title a').then((ele) => {
            expect(ele.text()).to.equal('3% Niacinamide Foaming Face Wash - 100ml');
        })
    })



    it('open Pigmentation page from home page dropdown section', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getPigmentationPageButton().click({force:true})
    })

    it('Pigmentation PLP page products images are visible ?', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getPigmentationPageButton().click({force:true})
        cy.scrollTo(0, 1500);
        cy.wait(5000)
        cy.get('.ProductCard_Wrapper_DisplayArea img').each(($e1, index, $list) => {
            cy.wrap($e1).invoke('attr', 'src').then((src) =>{
               var url = src;
               cy.request('GET', url).then((res) =>{
                   expect(res.status).to.eq(200);
               })
            })
        })
    })

    it('add product to cart from Pigmentation page PLP and verify right product is added or not?', () =>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getPigmentationPageButton().click({force:true})
        cy.wait(2000)
        cy.get('.search-cards').each(($e1, index, $list) =>{
            if($e1.text().includes('1% Hyaluronic Sunscreen Aqua Gel - 50g')){
                $e1.find('button').click()
            }
        })
        
        cy.get('.cart-icon').click()
        cy.get('.cart-item-title a').then((ele) => {
            expect(ele.text()).to.equal('1% Hyaluronic Sunscreen Aqua Gel - 50g');
        })
    })



    it('open Acne Scars page from home page dropdown section', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getAcneScarsPageButton().click({force:true})
        anceScanPage.getPageTitle().then((ele) => {
            expect(ele.text()).to.equal('Acne scars')
        })
    })

    it('Acne Scars PLP page products images are visible ?', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getAcneScarsPageButton().click({force:true})
        cy.scrollTo(0, 1500);
        cy.wait(5000)
        cy.get('.ProductCard_Wrapper_DisplayArea img').each(($e1, index, $list) => {
            cy.wrap($e1).invoke('attr', 'src').then((src) =>{
               var url = src;
               cy.request('GET', url).then((res) =>{
                   expect(res.status).to.eq(200);
               })
            })
        })
    })

    it('add product to cart from Acne Scars page PLP and verify right product is added or not?', () =>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getAcneScarsPageButton().click({force:true})
        cy.wait(2000)
        cy.get('.search-cards').each(($e1, index, $list) =>{
            if($e1.text().includes('3% AHA+BHA Foaming Daily Face Wash 100ml')){
                $e1.find('button').click()
            }
        })
        
        cy.get('.cart-icon').click()
        cy.get('.cart-item-title a').then((ele) => {
            expect(ele.text()).to.equal('3% AHA+BHA Foaming Daily Face Wash 100ml');
        })
    })



    it('open Acne / Pimple page from home page dropdown section', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getAcnePimplePageButton().click({force:true})
    })

    it('open Acne / Pimple PLP page products images are visible ?', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getAcnePimplePageButton().click({force:true})
        cy.scrollTo(0, 1500);
        cy.wait(5000)
        cy.get('.ProductCard_Wrapper_DisplayArea img').each(($e1, index, $list) => {
            cy.wrap($e1).invoke('attr', 'src').then((src) =>{
               var url = src;
               cy.request('GET', url).then((res) =>{
                   expect(res.status).to.eq(200);
               })
            })
        })
    })

    it('add product to cart from Acne Pimple page PLP and verify right product is added or not?', () =>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getAcnePimplePageButton().click({force:true})
        cy.wait(2000)
        cy.get('.search-cards').each(($e1, index, $list) =>{
            if($e1.text().includes('2% Salicylic Acid Serum - 30ml')){
                $e1.find('button').click()
            }
        })
        
        cy.get('.cart-icon').click()
        cy.get('.cart-item-title a').then((ele) => {
            expect(ele.text()).to.equal('2% Salicylic Acid Serum - 30ml');
        })
    })





    it('open Pores page from home page dropdown section', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getOpenPoresPageButton().click({force:true})
    })

    it('open Pores PLP page products images are visible ?', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getOpenPoresPageButton().click({force:true})
        cy.scrollTo(0, 1500);
        cy.wait(5000)
        cy.get('.ProductCard_Wrapper_DisplayArea img').each(($e1, index, $list) => {
            cy.wrap($e1).invoke('attr', 'src').then((src) =>{
               var url = src;
               cy.request('GET', url).then((res) =>{
                   expect(res.status).to.eq(200);
               })
            })
        })
    })

    it('add product to cart from Open Pores page PLP and verify right product is added or not?', () =>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getOpenPoresPageButton().click({force:true})
        cy.wait(2000)
        cy.get('.search-cards').each(($e1, index, $list) =>{
            if($e1.text().includes('Pore Minimizing Priming Sunscreen with SPF 50 & PA+++ For Open Pores & UVA/UVB Protection - 50g')){
                $e1.find('button').click()
            }
        })
        
        cy.get('.cart-icon').click()
        cy.get('.cart-item-title a').then((ele) => {
            expect(ele.text()).to.equal('Pore Minimizing Priming Sunscreen with SPF 50 & PA+++ For Open Pores & UVA/UVB Protection - 50g');
        })
    })





    it('open Hair Care page from home page dropdown section', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getHairCarePageButton().click({force:true})
    })

    it('Hair Care PLP page products images are visible ?', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getHairCarePageButton().click({force:true})
        cy.scrollTo(0, 1500);
        cy.wait(5000)
        cy.get('.ProductCard_Wrapper_DisplayArea img').each(($e1, index, $list) => {
            cy.wrap($e1).invoke('attr', 'src').then((src) =>{
               var url = src;
               cy.request('GET', url).then((res) =>{
                   expect(res.status).to.eq(200);
               })
            })
        })
    })

    it('add product to cart from Hair Care page PLP and verify right product is added or not?', () =>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getHairCarePageButton().click({force:true})
        cy.wait(2000)
        cy.get('.search-cards').each(($e1, index, $list) =>{
            if($e1.text().includes('Biotin & Multivitamin')){
                $e1.find('button').click()
            }
        })
        
        cy.get('.cart-icon').click()
        cy.get('.cart-item-title a').then((ele) => {
            expect(ele.text()).to.equal('Biotin & Multivitamin');
        })
    })



    it('open Skin Radiance page from home page dropdown section', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getSkinRadiancePageButton().click({force:true})
    })

    it('Skin Radiance PLP page products images are visible ?', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getSkinRadiancePageButton().click({force:true})
        cy.scrollTo(0, 1500);
        cy.wait(5000)
        cy.get('.ProductCard_Wrapper_DisplayArea img').each(($e1, index, $list) => {
            cy.wrap($e1).invoke('attr', 'src').then((src) =>{
               var url = src;
               cy.request('GET', url).then((res) =>{
                   expect(res.status).to.eq(200);
               })
            })
        })
    })

    it('add product to cart from Skin radiance page PLP and verify right product is added or not?', () =>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getSkinRadiancePageButton().click({force:true})
        cy.wait(2000)
        cy.get('.search-cards').each(($e1, index, $list) =>{
            if($e1.text().includes(' C-Cinamide Radiance Sunscreen Aqua Gel with SPF 50 & PA++++ - 50g')){
                $e1.find('button').click()
            }
        })
        
        cy.get('.cart-icon').click()
        cy.get('.cart-item-title a').then((ele) => {
            expect(ele.text()).to.equal(' C-Cinamide Radiance Sunscreen Aqua Gel with SPF 50 & PA++++ - 50g');
        })
    })



    it('open Dry & Dull Skin page from home page dropdown section', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getDryDullSkinPageButton().click({force:true})
    })

    it('Dry & Dull PLP page products images are visible ?', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getSkinRadiancePageButton().click({force:true})
        cy.scrollTo(0, 1500);
        cy.wait(5000)
        cy.get('.ProductCard_Wrapper_DisplayArea img').each(($e1, index, $list) => {
            cy.wrap($e1).invoke('attr', 'src').then((src) =>{
               var url = src;
               cy.request('GET', url).then((res) =>{
                   expect(res.status).to.eq(200);
               })
            })
        })
    })

    it('add product to cart from Dry & dull skin page PLP and verify right product is added or not?', () =>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getDryDullSkinPageButton().click({force:true})
        cy.wait(2000)
        cy.get('.search-cards').each(($e1, index, $list) =>{
            if($e1.text().includes('1% Collagen Daily Face Serum-Cream with Green Tea & Hyaluronic Acid - 50g')){
                $e1.find('button').click()
            }
        })
        
        cy.get('.cart-icon').click()
        cy.get('.cart-item-title a').then((ele) => {
            expect(ele.text()).to.equal('1% Collagen Daily Face Serum-Cream with Green Tea & Hyaluronic Acid - 50g');
        })
    })



    it('open View All page from home page dropdown section', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getViewAllPageButton().click({force:true})
    })

    it('View All PLP page products images are visible ?', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getViewAllPageButton().click({force:true})
        cy.scrollTo(0, 2000);
        cy.wait(5000)
        cy.get('.ProductCard_Wrapper_DisplayArea img').each(($e1, index, $list) => {
            cy.wrap($e1).invoke('attr', 'src').then((src) =>{
               var url = src;
               cy.request('GET', url).then((res) =>{
                   expect(res.status).to.eq(200);
               })
            })
        })
    })

    it('add product to cart from All product page PLP and verify right product is added or not?', () =>
    {
        cy.contains('All Products').click({force:true})
        cy.get('.search-cards').each(($e1, index, $list) =>{
            if($e1.text().includes('Minimizes Pores | Makes Skin Smooth & Matte')){
                $e1.find('button').click()
            }
        })
        cy.wait(2000)
        cy.get('.cart-icon').click()
        // cy.contains('Continue').click()
        // cy.addressFormFill()
        cy.get('.cart-item-title a').then((ele) => {
            expect(ele.text()).to.equal('2% Niacinamide Pore Minimizing Primer For Pore Minimizing & Mattifying Skin - 30g');
        })
    })



    it('open All products page from home page section', ()=>
    {
        homePage.getAllProductPageButton().click({force:true})
    })

    it('View All PLP page products images are visible ?', ()=>
    {
        homePage.getShopByConcernSection().invoke('show')
        homePage.getViewAllPageButton().click({force:true})
        cy.scrollTo('bottom');
        cy.wait(5000)
        cy.get('.ProductCard_Wrapper_DisplayArea img').each(($e1, index, $list) => {
            cy.wrap($e1).invoke('attr', 'src').then((src) =>{
               var url = src;
               cy.request('GET', url).then((res) =>{
                   expect(res.status).to.eq(200);
               })
            })
        })
    })

    it('verify product value of a product on PDP and PLP', () =>
    {
        cy.contains('All Products').click({force:true})

        var plpPrice
        cy.get('.search-cards').each(($e1, index, $list) =>{
            if($e1.text().includes('1% Hyaluronic Sunscreen Aqua Gel - 50g')){
                plpPrice = $e1.find("[class^='price']").text()
                plpPrice = Number(plpPrice.slice(1))

                $e1.find("[class^='price']").click()
            }
        }).then(()=>
        {
            cy.wait(5000)
            var pdpPrice;
            cy.get('.product-details .price').then((ele) =>{
                pdpPrice = ele.text()
                pdpPrice = Number(pdpPrice.slice(1))
            }).then(()=>{
                expect(plpPrice).to.equal(pdpPrice)
            })
        })
    })

    it('Add product to cart from PDP', () =>
    {
        cy.contains('All Products').click({force:true})

        var plpPrice
        cy.get('.search-cards').each(($e1, index, $list) =>{
            if($e1.text().includes('1% Hyaluronic Sunscreen Aqua Gel - 50g')){
                $e1.find("[class^='price']").click()
            }
        })

        cy.get('.product-details button:nth-child(2)').click()
    })

    it('Add product to cart from PDP', () =>
    {
        cy.contains('All Products').click({force:true})

        cy.get('.search-cards').each(($e1, index, $list) =>{
            if($e1.text().includes('1% Hyaluronic Sunscreen Aqua Gel - 50g')){
                $e1.find("[class^='price']").click()
            }
        })

        cy.get('.product-details button:nth-child(2)').click()
    })
})