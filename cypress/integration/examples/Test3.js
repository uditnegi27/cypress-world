/// <reference types = "cypress"/>

describe('alert and new window', function() {

    it('alert window', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        // this will cature the text on a alart
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.get('#confirmbtn').click()
        // this will cature the text on a popup
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        // This will remove attribute form tag and open the link on a same browser
        // cy.get('#opentab').invoke('removeAttr', 'target').click()

        // cy.url().should('include', 'qaclickacademy')
        // cy.go('back')



        // this will compare the price of expexted courses in a table
        cy.get('#product').find('tr td:nth-child(2)').each(($e1, index, $list) => {
            const pName = $e1.text()
            if(pName.includes('Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C')){
                cy.get('#product').find('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceVal = price.text()
                    expect(priceVal).to.equal('20')
                })
            }
        })

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')

    })
})