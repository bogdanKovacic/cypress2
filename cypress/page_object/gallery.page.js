export default class CreateGallery {

    get title() {
        return cy.get('#title')
    }
    get descriptions() {
        return cy.get('input[type= "description"]')
    }
    
    get images() {
        return cy.get('input[type="url"]')
    }

    get submit () {
        return cy.get('submit[type="submit"]')
    }

    get cancel () {
        return cy.get('cancel[type="submit"]')
    }

    get add_image () {
        return cy.get('add_image[type="button"]')
    }



}

export const createGallery = new CreateGallery()
