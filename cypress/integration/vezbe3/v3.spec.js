

//import { REGISTRACIJA } from '../../fixtures/v.3.constants'
import { v3page } from '../../page_object/v.3.page'


describe('Checking the register', function() {


    beforeEach(() => {
        cy.visit('/')
        cy.contains('Register').click()
    })


    // it('T-01- Register cheching', function() { // cilj testa je da se proveri da li na url asresi postoji raster reginster
    //     cy.url().should('include', '/register')
    // })

    // it('T-02- Register a new user', function() { // bez inportovanja drugih fajlova radi osim main filea '/'

    //     cy.get('input[id="first-name"]').type('Stepa')
    //     cy.get('input[id="last-name"]').type('Stepanovic')
    //     cy.get('input[id="email"]').type('stepa.stepanovic@gmail.com')
    //     cy.get('input[id="password"]').type('stepa1918')
    //     cy.get('input[id="password-confirmation"]').type('stepa1918')
    //     cy.get('input[type="checkbox"]').check()
    //     cy.get('button[type="submit"]').click()

    // })

    // it('T-03- Register a new user', function() { // isto radi bez inporta stim sto je kod malo skracen
    //         cy.get('#first-name').type("Stepa")
    //         cy.get('#last-name').type('Stepanovic')
    //         cy.get('input[id="email"]').type('stepa.stepanovic@gmail.com')
    //         cy.get('#password').type('stepa1918')
    //         cy.get('#password-confirmation').type('stepa1918')
    //         //cy.get('#checkbox').check() // zasto skraceni kod na ovo ne radi?
    //         cy.get('input[type="checkbox"]').check()
    //         //cy.get('#submit').click() // zasto skarceni kod na ovo ne radi?
    //         cy.get('button[type="submit"]').click()

    // })



    it('T-04- Register a new user', function() { // ulepsavanje koda
        v3page.register({
            name: 'Stepa',
            surname: 'Stepanovic',
            email: 'stepa.stepanovic@gmail.com',
            password: 'stepa1918',
            passConf: 'stepa1918',
            checkbox: 'yes'
        })
           

    })
})

