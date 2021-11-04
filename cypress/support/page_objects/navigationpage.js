import { dropRight } from "lodash"


function selectGroupMeuItem(groupName){
    cy.contains('a', groupName).then(menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then( attr=>{
            if(attr.includes(left)){
                cy.wrap(menu).click()
            }
        })
    })
}

export class NavigationPage{
 formsLayoutsPage()
 {
    selectGroupMeuItem('Forms')
    cy.contains('Form Layouts').click()
    cy.wait(5000)
 }
 datepickerPage()
 {
    selectGroupMeuItem('Forms')
    cy.contains('Datepicker').click()
    cy.wait(5000)
 }
}
export const navigateTo = new NavigationPage()
