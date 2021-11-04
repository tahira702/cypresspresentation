/// <reference types="cypress"/>

import { contains } from "jquery"

export class inlineform{
 enteremailandpwd(username,password )

{
cy.contains('nb-card','inlineform').find('form').then(form=>{
    cy.wrap(form).find('[placeholder="Joe jane"]').type("Tahira")
    cy.wrap(form).find('[placeholder="email"]').type("taka@ciklum.com")
    cy.wrap(form).find('[type="checkbox"]').check({force : true})
})

}
}

export const inline = new inlineform()