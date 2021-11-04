/// <reference types="cypress"/>



    describe('locators example Test inside Demo of cypress', ()=> {
        
        it.only('Locating "email" field using different locators', ()=>{
            cy.visit('/')
           cy.contains('Forms').click()
           cy.contains('Form Layouts').click()
           cy.wait(5000)
           cy.get('input').should('be.empty') //Tag name
           cy.get('[placeholder="Jane Doe"]').click({ force: true })
           /*cy.get('#inputEmail1') // by Id
            cy.get('.input-full-width') // by Class name
           cy.get('[placeholder]') //by attribute name
           cy.get('[placeholder="Email"]') //by attribute name and value
           cy.get('[class="input-full-width size-medium shape-rectangle"]') // by Class value
           cy.get('[data-cy="imputEmail1"]').type('taka@ciklum.com')// custom attribute
            cy.get('[data-cy=signInButton]')
           cy.get('#inputPassword2').type('1234')
           cy.get('nb-radio')
           cy.get('#inputEmail1').parents('form').find('button').click({ force: true }).end()*/
           
           
            
            
        })
        it('Radio button test', () =>{
            cy.get('#inputEmail1').parents('form').find('Option 1').debug()

        })
        it ('checkbox test', () =>{
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()
            cy.wait(5000)
            debugger
            cy.get('#inputEmail3').parents('form').find('nb-checkbox').click({ force: true })
        })
        it ('dropdown button test', () =>{
            
        })

        

    })

