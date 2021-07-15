
/// <reference types="cypress"/>



    describe('locators example Test inside', ()=> {
        it('my first Test', ()=>{
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()
            cy.wait(5000)
            cy.get('input') //Tag name
            cy.get('#inputEmail1') // by Id
            cy.get('.input-full-width') // by Class name
            cy.get('[placeholder]') //by attribute name
            cy.get('[placeholder="Email"]') //by attribute name and value
            cy.get('[class="input-full-width size-medium shape-rectangle"]') // by Class value
            cy.get('[data-cy="imputEmail1"]').type('taka@ciklum.com')// custom attribute
            cy.get('[data-cy=signInButton]')
            cy.get('#inputPassword2').type('1234')
            cy.get('nb-radio')
            cy.get('#inputEmail1').parents('form').find('button').click({ force: true })
            
            
            
        })
        it('Radio button selection test' , ()=>{

        })
        it('Check box selection test' , ()=>{
            
        })
        it('dropdown selection test' , ()=>{
            
        })
        it('Table new record insertion test' , ()=>{
            
        })
        it('Table updating ol record test' , ()=>{
            
        })

    })

