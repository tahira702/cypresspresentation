import { inline } from "../support/page_objects/inlineform"
import { navigateTo } from "../support/page_objects/navigationpage"

describe('Test with Page Object', ()=>
{
  //  beforeEach('Open Application' , ()=>{
    //    cy.visit('/'))}
    
    it.only('Verify Nevigation accros the pages', () =>{
        cy.visit('/')
        navigateTo.formsLayoutsPage() 
        navigateTo.datepickerPage()
    })
    it.only('submit inline form ', ()=>{

       inline.enteremailandpwd(username, email)

    })
   
}) 