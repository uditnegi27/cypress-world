/// <reference types = "cypress"/>

describe('checkbox and dropdown', function() 
{
    it('first code', function() 
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck()
        cy.get('input[type="checkbox"]').check(['option1', 'option2'])

        // Static dropdown 
        cy.get('select').select('option1').should('have.value', 'option1')

        // Dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').each(($e1, index, $list) => {
            const name = $e1.text();
            if(name === 'India'){
                $e1.click()
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')

    })
})