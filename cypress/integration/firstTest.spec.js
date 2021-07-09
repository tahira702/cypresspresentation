
/// <reference types="cypress"/>

    describe('Demo Test inside', ()=> {
        it('my first Test', ()=>{
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()
            cy.get('input') //Tag name
            cy.get('#inputEmail1').type('taka@ciklum.com') // by Id
            cy.get('.input-full-width') // by Class name
            cy.get('[placeholder]') //by attribute name
            cy.get('[placeholder="Email"]') //by attribute name and value
            cy.get('[class="input-full-width size-medium shape-rectangle"]') // by Class value
            cy.get('[data-cy="imputEmail1"]').type('taka@ciklum.com')// custom attribute
            
            
        })

    })

