/// <reference types = "cypress"/>

describe('Ayuga-guest-purchase', function() {
    it('without coupon', function() {
        cy.clearAllCookies()
        cy.visit('https://ayuga.in/')
        cy.wait(2000)
        
        cy.get('.slick-track').find('.sc-cpmKsF.jnUVzR.search-cards:visible').each(($e1, index, $list) => {
            const name = $e1.text()
            if(name.includes('Face')){
                $e1.find('button').click()
            }
        })

        cy.get('.cart-icon').click()

        cy.get('button.checkout-button').click()
        cy.get('input[name=firstname]').type('test')
        cy.get('input[name=lastname]').type('user')
        cy.get('input[name=email]').type('testuser734637@gmail.com')
        cy.get('input[name=telephone]').type('9462718230')
        cy.get('input[name=postcode]').type('110001')
        cy.get('input[name=street]').type('test address')

        cy.wait(5000)

        cy.get('.tab').find('.tablinks').each(($e1, index, $list) => {
            if($e1.text().includes('Cash on Delivery')){
                $e1.find('.buttonText').click()
            }
        })
        cy.get('.sc-jDwBTQ.sc-gPEVay.WoiqE.mobileHidden.payNowBtn').click()

    })

    // it('with coupon', function() {
    //     cy.clearAllCookies()
    //     cy.visit('https://ayuga.in/')
    //     cy.wait(2000)
        
    //     cy.get('.slick-track').find('.sc-cpmKsF.jnUVzR.search-cards:visible').each(($e1, index, $list) => {
    //         const name = $e1.text()
    //         if(name.includes('Face')){
    //             $e1.find('button').click()
    //         }
    //     })

    //     cy.get('.cart-icon').click()

    //     cy.get('.coupon-tray-strip').click()
    //     cy.get('.sc-jXQZqI').find('input').type('CLEAR')
    //     cy.get('.input-apply').click()

    //     cy.get('button.checkout-button').click()
    //     cy.get('input[name=firstname]').type('test')
    //     cy.get('input[name=lastname]').type('user')
    //     cy.get('input[name=email]').type('testuser734637@gmail.com')
    //     cy.get('input[name=telephone]').type('9462718230')
    //     cy.get('input[name=postcode]').type('110001')
    //     cy.get('input[name=street]').type('test address')

    //     cy.wait(5000)
        

    //     cy.get('.tab').find('.tablinks').each(($e1, index, $list) => {
    //         if($e1.text().includes('Cash on Delivery')){
    //             $e1.find('.buttonText').click()
    //         }
    //     })
    //     cy.get('.sc-jDwBTQ.sc-gPEVay.WoiqE.mobileHidden.payNowBtn').click()
        
    // })
})