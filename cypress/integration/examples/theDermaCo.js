/// <reference types= "cypress"/>



describe('Learning test cases', ()=>
{
    beforeEach(()=>{
        cy.viewport(2800, 1200)
        cy.visit('https://thedermaco.com/')
    })





    // it('open Acne Marks page', ()=>
    // {
    //     // cy.scrollTo(0,1000)
    //     // cy.get('#wzrk-confirm-id').invoke('show')
    //     cy.contains('Shop by Concern').invoke('show')
    //     cy.contains('Acne Marks').click({force:true})
    //     // cy.contains('Free Skin Assessment').click({force:true})

    // })







    // it('open Pigmentation page', ()=>
    // {
    //     // cy.scrollTo(0,1000)
    //     // cy.get('#wzrk-confirm-id').invoke('show')
    //     cy.contains('Shop by Concern').invoke('show')
    //     cy.contains('Pigmentation').click({force:true})
    //     // cy.contains('Free Skin Assessment').click({force:true})

    // })







    // it('open Acne Scars page', ()=>
    // {
    //     // cy.scrollTo(0,1000)
    //     // cy.get('#wzrk-confirm-id').invoke('show')
    //     cy.contains('Shop by Concern').invoke('show')
    //     cy.contains('Acne Scars').click({force:true})
    //     // cy.contains('Free Skin Assessment').click({force:true})
    // })







    // it('open All products page', ()=>
    // {
    //     // cy.scrollTo(0,1000)
    //     // cy.get('#wzrk-confirm-id').invoke('show')
    //     // cy.contains('Shop by Concern').invoke('show')
    //     cy.contains('All Products').click({force:true})
    //     // cy.contains('Free Skin Assessment').click({force:true})
    // })







    // it('add product from All product page PLP', () =>
    // {
    //     cy.contains('All Products').click({force:true})
    //     cy.get('.search-cards').each(($e1, index, $list) =>{
    //         if($e1.text().includes('Minimizes Pores | Makes Skin Smooth & Matte')){
    //             $e1.find('button').click()
    //         }
    //     })
    //     cy.wait(5000)
    //     cy.get('.cart-icon').click()
    //     cy.contains('Continue').click()
    //     cy.addressFormFill()
    // })








    // it('verify product value of a product on PDP and PLP', () =>
    // {
    //     cy.contains('All Products').click({force:true})

    //     var plpPrice
    //     cy.get('.search-cards').each(($e1, index, $list) =>{
    //         if($e1.text().includes('1% Hyaluronic Sunscreen Aqua Gel - 50g')){
    //             plpPrice = $e1.find("[class^='price']").text()
    //             plpPrice = Number(plpPrice.slice(1))

    //             $e1.find("[class^='price']").click()
    //         }
    //     }).then(()=>
    //     {
    //         cy.wait(5000)
    //         var pdpPrice;
    //         cy.get('.product-details .price').then((ele) =>{
    //             pdpPrice = ele.text()
    //             pdpPrice = Number(pdpPrice.slice(1))
    //         }).then(()=>{
    //             expect(plpPrice).to.equal(pdpPrice)
    //         })
    //     })
    // })







    // it('Add product to cart from PDP', () =>
    // {
    //     cy.contains('All Products').click({force:true})

    //     var plpPrice
    //     cy.get('.search-cards').each(($e1, index, $list) =>{
    //         if($e1.text().includes('1% Hyaluronic Sunscreen Aqua Gel - 50g')){
    //             $e1.find("[class^='price']").click()
    //         }
    //     })

    //     cy.get('.product-details button:nth-child(2)').click()
    // })







    // it('Add product to cart from PDP', () =>
    // {
    //     cy.contains('All Products').click({force:true})

    //     cy.get('.search-cards').each(($e1, index, $list) =>{
    //         if($e1.text().includes('1% Hyaluronic Sunscreen Aqua Gel - 50g')){
    //             $e1.find("[class^='price']").click()
    //         }
    //     })

    //     cy.get('.product-details button:nth-child(2)').click()
    // })






    // it('Verify total price on view cart when product value is greater than 399', () =>
    // {
    //     cy.contains('All Products').click({force:true})

    //     var productPrice;
    //     cy.get('.search-cards').each(($e1, index, $list) =>{
    //         if($e1.text().includes('1% Hyaluronic Sunscreen Aqua Gel - 50g')){
    //             productPrice = $e1.find("[class^='price']").text()
    //             productPrice = Number(productPrice.slice(1))
    //             $e1.find('button').click()
    //         }
    //     }).then(() =>
    //     {
    //         var cartTotal
    //         cy.wait(5000)
    //         cy.get('.cart-icon').click()
    //         cy.get('.drawer-footer-wrapper .price').then((ele) =>
    //         {
    //             cartTotal = ele.text()
    //             cartTotal = Number(cartTotal.slice(1))
    //             productPrice -= (productPrice*5)/100;
    //             expect(productPrice).to.equal(cartTotal)
    //         })
    //     })
    // })





    // it('Test apply coupon to cart when coupon condition are matched', ()=>
    // {

    //     var priceAfterApplyCoupon
    //     var priceBeforeApplyCoupon 

    //     cy.contains('All Products').click({force:true})
    //     var productPrice
    //     cy.get('.search-cards').each(($e1, index, $list) =>{
    //         if($e1.text().includes('Sali-Cinamide Anti-Acne Serum with 2% Salicylic Acid & 5% Niacinamide - 30ml')){
    //             $e1.find('button').click()
    //         }
    //     }).then(() =>
    //     {
    //         cy.wait(5000)
    //         cy.get('.cart-icon').click()

    //         // Capture the total price before applying the coupon
    //         cy.get('.drawer-footer-wrapper .price').then((ele) =>
    //         {
    //             priceBeforeApplyCoupon = ele.text()
    //             priceBeforeApplyCoupon = Number(priceBeforeApplyCoupon.slice(1))
    //         })

    //         //Apply coupon
    //         cy.get('.coupon-tray-strip').click()
    //         cy.get('.coupon-name-apply').each(($e1, index, $list) =>
    //         {
    //             if($e1.find('.coupon-name').text() == "REDEEM20"){
    //                 $e1.find('.coupon-apply').click()
    //             }
    //         })
    //     }).then(()=>
    //     {
    //         cy.get('.drawer-footer-wrapper .price').then((ele) =>
    //         {
    //             priceAfterApplyCoupon = ele.text()
    //             priceAfterApplyCoupon = Number(priceAfterApplyCoupon.slice(1))
    //             expect(priceAfterApplyCoupon).to.lessThan(priceBeforeApplyCoupon)
    //         })
    //     })
    // })

    
    it('Order placement using COD methods with applied coupon', ()=>
    {
        var priceAfterApplyCoupon
        var priceBeforeApplyCoupon 

        cy.contains('All Products').click({force:true})
        var productPrice
        cy.get('.search-cards').each(($e1, index, $list) =>{
            if($e1.text().includes('Sali-Cinamide Anti-Acne Serum with 2% Salicylic Acid & 5% Niacinamide - 30ml')){
                $e1.find('button').click()
            }
        }).then(() =>
        {
            cy.wait(5000)
            cy.get('.cart-icon').click()

            // Capture the total price before applying the coupon
            cy.get('.drawer-footer-wrapper .price').then((ele) =>
            {
                priceBeforeApplyCoupon = ele.text()
                priceBeforeApplyCoupon = Number(priceBeforeApplyCoupon.slice(1))
            })

            //Apply coupon
            cy.get('.coupon-tray-strip').click()
            cy.get('.coupon-name-apply').each(($e1, index, $list) =>
            {
                if($e1.find('.coupon-name').text() == "REDEEM20"){
                    $e1.find('.coupon-apply').click()
                }
            })
        }).then(()=>
        {
            cy.get('.drawer-footer-wrapper .price').then((ele) =>
            {
                priceAfterApplyCoupon = ele.text()
                priceAfterApplyCoupon = Number(priceAfterApplyCoupon.slice(1))
                expect(priceAfterApplyCoupon).to.lessThan(priceBeforeApplyCoupon)
            })
        })


    })


    
})
