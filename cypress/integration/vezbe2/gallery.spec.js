

import { EMAIL } from '/home/qa/cypress2/cypress/fixtures/constants.js'
import { authPage } from '../../page_object/login.page'
import { createGallery } from '../../page_object/home.page'
import { randomEmail } from '../../utils'

describe('Checking the register', function(){
   

    beforeEach(() => {
        cy.visit('/login') // nalazio se u osnovnom it kodu prebacen u before each zbog pojednostavljenja koda.
        authPage.login(EMAIL.EXISTING, EMAIL.PASSWORD) 
        cy.contains('Submit').click()
        
        
        
    })

    it('TC - 01 My gallery page - pagination', function() {
        cy.get('.cell').eq(9).should('exist')
        cy.get('.cell').eq(10).should('not.exist')
        cy.get('.btn-custom').click()
        //Nikad ne koristiti eksplicitan wait u milisekundama kao ispod
        cy.wait(4000)
        cy.get('.cell').eq(19).should('exist')
        cy.get('.cell').eq(20).should('not.exist')
    })


    it('TC - 02 My gallery page - pagination', function() {
      cy.get('div.grid').children().should('have.length', 10)
      cy.contains('Load More').click()
      cy.get('div.grid').children().should('not.have.length', 10) // .should('have.length',10) - moze i ovako
    })

    it('TC - 03 Create gallery positive case', function() {
        cy.contains('Create Gallery').click()
        cy.get('#title').type('new gallery')
        cy.get('#description').type("slike")
        cy.get('input[type="url"]').type('https://upload.wikimedia.org/wikipedia/en/b/b3/Imagine_Dragons_performing_in_Sydney.jpg')
        cy.contains('Submit').click()
        cy.get('.box-title').eq(0).should('contain', 'nova galerija')
    })


    it.only('TC - 04 Create gallery positive case', function() {
        var random = randomEmail()
        cy.contains('Create Gallery').click()
        cy.get('#title').type(random)
        cy.get('#description').type("slike")
        cy.get('input[type="url"]').type('https://upload.wikimedia.org/wikipedia/en/b/b3/Imagine_Dragons_performing_in_Sydney.jpg')
        cy.contains('Submit').click()
        cy.get('.box-title').eq(0).should('contain', random)
    })

})
