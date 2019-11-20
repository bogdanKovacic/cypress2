

import { DATA, REGISTRACIJA } from '/home/qa/cypress2/cypress/fixtures/register.constants.js'
import { authPage } from '/home/qa/cypress2/cypress/page_object/register.page.js'
import { randomEmail } from '../../utils'


describe('Checking the register', function(){
    it('Does not do much!', function(){
        expect(true).to.equal(true) 
    })

    beforeEach(() => {
        cy.visit('/') // nalazio se u osnovnom it kodu prebacen u before each zbog pojednostavljenja koda.
        cy.contains('Register').click() // isto, citaj gore. 
    })

    /*it('register a new user', function() {
        cy.url().should('include', '/register')
        authPage.register(DATA.FIRSTNAME,DATA.LASTNAME,'petarvetargmail.com',DATA.PASSWORD,DATA.PASSWORD_CONFIRMATION)
        // cy.get('input[id="first-name"]').type("Nenad")
        // cy.get('input[id="last-name"]').type("Dragan")
        // cy.get('input[id="email"]').type("dragan.nenad@gmail.com")
        // cy.get('input[id="password"]').type('dragan1nenad')
        // cy.get('input[id="password-confirmation"]').type('dragan1nenad')
        cy.get('input[type="checkbox"]').check() // kuci skratiti kod!!!
        cy.get('button[type="submit"]').click(); // kuci skratiti kod!!!

        authPage.email.then(($input) => {
            expect($input[0].validationMessage).to.eq("Please include an '@' in the email address. 'petarvetargmail.com' is missing an '@'.")
        })
    })

    it('register a new user', function() {
        cy.url().should('include', '/register')
        authPage.register(DATA.FIRSTNAME,DATA.LASTNAME,'petarvetargmail.com',DATA.PASSWORD,DATA.PASSWORD_CONFIRMATION)
        // cy.get('input[id="first-name"]').type("Nenad")
        // cy.get('input[id="last-name"]').type("Dragan")
        // cy.get('input[id="email"]').type("dragan.nenad@gmail.com")
        // cy.get('input[id="password"]').type('dragan1nenad')
        // cy.get('input[id="password-confirmation"]').type('dragan1nenad')
        cy.get('input[type="checkbox"]').check() // kuci skratiti kod!!!
        cy.get('button[type="submit"]').click(); // kuci skratiti kod!!!
        authPage.email.then(($input) => {
            expect($input[0].validationMessage).to.eq("Please include an '@' in the email address. 'petarvetargmail.com' is missing an '@'.")
        })
    }) 

    it('TC - 01 Register to galery app', function() {
        authPage.register({
            first_name: 'Nenad',
            last_name: 'Dragan',
            email: randomEmail(),
            password: 'dragan1nenad',
            password_confirmation: 'dragan1nenad'
        }) 
        cy.get('input[type="checkbox"]').check() // kuci skratiti kod!!!
        cy.get('button[type="submit"]').click(); // kuci skratiti kod!!!
       
    })  */

    it('TC - 01 Register to galery app', function() {
        authPage.register(REGISTRACIJA) // konstanta koju smo definisali u register.constants.js
        cy.get('input[type="checkbox"]').check() // kuci skratiti kod!!!
        cy.get('button[type="submit"]').click(); // kuci skratiti kod!!!
        
    })

})
